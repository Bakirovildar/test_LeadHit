<template>
  <HeaderVue/>
  <router-view></router-view>
</template>

<script>
import HeaderVue from './components/Header.vue'

export default {
  name: 'App',
  components: {
    HeaderVue
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0px;
  box-sizing: border-box;
  vertical-align: baseline;
	font-weight: inherit;
	font-family: inherit;
	font-style: inherit;
	font-size: 100%;
	border: 0 none;
	outline: 0;
	padding: 0;
	margin: 0;
}
</style>
