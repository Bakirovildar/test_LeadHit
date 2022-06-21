import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            siteId: ''
        }
    },
    mutations:{
        setSiteId(state, id) {
            console.log(id);
            state.siteId = id
        }
    },
    getters: {
        siteId(state) {
            return state.siteId
        }
    }
})