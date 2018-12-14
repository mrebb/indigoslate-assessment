import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import EventEdit from './views/event-form.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/create',
            name: 'create',
            component: EventEdit
        },
        {
            path: '/modify',
            name: 'modify',
            props: true,
            component: EventEdit
        }
    ]
})
