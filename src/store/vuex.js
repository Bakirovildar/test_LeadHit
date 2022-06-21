import { createStore } from "vuex";
import dataService from "@/services/data.service";

export default createStore({
    state() {
        return {
            siteId: '',
            data: []
        }
    },
    mutations:{
        setSiteId(state, id) {
            console.log(id);
            state.siteId = id
        },
        updateData(state) {
            state.data = dataService.getData()
        }
    },
    getters: {
        siteId(state) {
            return state.siteId
        },
        data(state) {
            return state.data
        }
    }
})