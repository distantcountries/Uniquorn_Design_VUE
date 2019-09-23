import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Covers from './components/Covers'
import SingleCover from './components/SingleCover'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/covers',
        component: Covers,
        name: 'covers'
    },
    {
        path: '/covers/:id',
        component: SingleCover,
        name: 'single-cover'
    }
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})


router.beforeResolve((to, from, next) => {
    if (to.name === 'single-cover' || to.name === 'covers') {
        NProgress.start()
    }
    next()
})

router.afterEach((to, from) => {
    NProgress.done()
})