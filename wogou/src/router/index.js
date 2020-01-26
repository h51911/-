import Vue from 'vue'
import VueRouter from 'vue-router'
import cyclopedia from '../components/Cyclopedia'
import Faqs from '../components/Faqs'
import Home from '../components/Home'
import Message from '../components/Message'
import My from '../components/My'

Vue.use(VueRouter);
let router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: '/home'
        },
        {
            name: "home",
            path: "/home",
            component: Home
        },
        {
            name: "cyclopedia",
            path: "/cyclopedia",
            component: cyclopedia
        },
        {
            name: "faqs",
            path: "/faqs",
            component: Faqs
        },
        {
            name: "message",
            path: "/message",
            component: Message
        }
        ,
        {
            name: "my",
            path: "/my",
            component: My
        }
    ]
})
export default router





