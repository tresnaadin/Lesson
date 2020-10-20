import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import home from "./views/Home/Home"
import about from "./views/About/About"
import profile from "./views/Profile/Profile"
import detail from "./views/Details/Details"

const mainRouter = new VueRouter({
    routes: [
        {
            path: "/",
            name: "Home",
            component: home,
        },
        {
            path: "/profile/:id",
            name: "profile",
            component: profile,
        },
        {
            path: "/about/:data",
            name: "about",
            component: about,
        },
        {
            path: "/detail",
            name: "detail",
            component: detail,
            props: true,
        },
    ],
})

export default mainRouter
