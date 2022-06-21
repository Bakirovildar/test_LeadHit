import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/vuex'
import titleMixin from './mixins/titleMixin'

createApp(App)
.use(store)
.use(router)
.mixin(titleMixin)
.mount('#app')
