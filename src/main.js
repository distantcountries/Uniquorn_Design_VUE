import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'
import Covers from './components/Covers'
import SingleCover from './components/SingleCover'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/covers',
        component: Covers,
        name: 'covers',
    },
    {
        path: '/covers/:id',
        component: SingleCover,
        name: 'single-cover'
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')