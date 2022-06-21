<template>
  <div class="analytics">
    <h3>Аналитика по визитам</h3>
    <div id="chartdiv"></div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import * as am5 from "@amcharts/amcharts5"
import * as am5xy from "@amcharts/amcharts5/xy"
import am5locales_ru_RU from "@amcharts/amcharts5/locales/ru_RU";
import am5theme_Animated from "@amcharts/amcharts5/themes/Animated";

export default {
  name: 'AnalyticsComponent',
  title: 'Аналитика',
  mounted() {
    this.updateData
    this.renderChart(this.data);
  },
  computed: {
    ...mapGetters(['data']),
    ...mapMutations(['updateData'])
  },
  methods: {
    renderChart(data) {
      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      const root = am5.Root.new("chartdiv");

      root.locale = am5locales_ru_RU

      root.setThemes([
        am5theme_Animated.new(root)
      ]);

      root.dateFormatter.setAll({
        dateFormat: "yyyy",
        dateFields: ["valueX"]
      });

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      const chart = root.container.children.push(am5xy.XYChart.new(root, {
        focusable: true,
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true
      }));

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      const xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
        maxDeviation: 0.1,
        groupData: false,
        baseInterval: {
          timeUnit: "day",
          count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {})
      }));

      const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0.2,
        renderer: am5xy.AxisRendererY.new(root, {})
      }));


      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      const series = chart.series.push(am5xy.LineSeries.new(root, {
        minBulletDistance: 10,
        connect: false,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "visits",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "{valueY}"
        })
      }));

      series.fills.template.setAll({
        fillOpacity: 0.2,
        visible: true
      });

      series.strokes.template.setAll({
        strokeWidth: 2
      });


      // Set up data processor to parse string dates
      // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
      series.data.processor = am5.DataProcessor.new(root, {
        dateFormat: "yyyy-MM-dd",
        dateFields: ["date"]
      });

      series.data.setAll(data);

      series.bullets.push(function () {
        const circle = am5.Circle.new(root, {
          radius: 4,
          fill: root.interfaceColors.get("background"),
          stroke: series.get("fill"),
          strokeWidth: 2
        });

        return am5.Bullet.new(root, {
          sprite: circle
        })
      });


      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        xAxis: xAxis,
        behavior: "none"
      }));
      cursor.lineY.set("visible", false);

      // add scrollbar
      chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
      }));


      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      chart.appear(1000, 100);
    }
  }
}
</script>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

#chartdiv {
  width: 100%;
  height: 400px;
}
</style>