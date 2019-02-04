import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import Toasted from 'vue-toasted';

Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// TODO own this:
//  Please don't let the current state of this front-end deter you from
//  modifying how it works, looks, and functions if you feel that it
//  could be better.

// TODO create back-end events api:
//  Please do not attempt to connect this front-end directly to a data tier
