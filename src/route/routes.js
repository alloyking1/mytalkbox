import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Radio from '../components/Radio.vue'
import Podcas from '../components/Podcast.vue'
import Home from '../components/Landing.vue'

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'Home',
            component: Home
        },
        {
            path:'/radio',
            name:'Radio',
            component: Radio
        },
        {
            path:'/podcast',
            name:'Podcast',
            component: Podcas
        },
    ]
})

export default router