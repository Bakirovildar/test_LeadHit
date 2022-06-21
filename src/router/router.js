import {createRouter, createWebHistory} from "vue-router"
import Auth from '../components/Auth'
import Analytics from '../components/Analytics'

let router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/auth', component: Auth, name: 'Auth'},
        {path: '/', component: Analytics, name: 'Analytics'}
    ]
})

const isAuthenticated = localStorage.getItem('leadhit-site-id')

router.beforeEach((to, from, next) => {
    if (to.name !== 'Auth' && !isAuthenticated) next({name: 'Auth'})
    else next()
})

export default router