import { createRouter, createWebHistory } from "vue-router"
import Auth from '../components/Auth'
import Analytics from '../components/Analytics'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/auth', component: Auth },
        { path: '/analytics', component: Analytics }
    ]
})