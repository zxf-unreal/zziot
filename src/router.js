import Vue from "vue";
import VueRouter from "vue-router";
import store from "./core/services/store"
import { VERIFY_AUTH } from "./core/services/store/auth.module";
import JwtService from "@/core/services/jwt.service";
import { message_error } from "./utils/helpers";
import { RESET_LAYOUT_CONFIG } from "./core/services/store/config.module";

export const baseRoutes = [
    {
        path: "/",
        name: "Layout",
        component: () => import("@/view/layout/Layout"),
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("@/view/pages/Home.vue")
            }
        ]
    },
    {
        path: "/auth",
        component: () => import("@/view/pages/auth/Auth"),
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import("@/view/pages/auth/Login")
            },
            {
                path: "/register",
                name: "register",
                component: () => import("@/view/pages/auth/Register")
            }
        ]
    },
    {
        path: "/visual_editor",
        name: "VisualEditor",
        component: () => import("@/view/pages/visual/editor/index"),
    },
    {
        path: "/visual_display",
        name: "VisualDisplay",
        component: () => import("@/view/pages/visual/display/index"),
    }

]


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: baseRoutes
})
router.beforeEach((to, from, next) => {

    const token = JwtService.getToken()
    const token_expires_in = JwtService.getExpiresTime()
    const now = Date.now();

    if (to.name == 'login') {
        next();
    } else if (!token || !token_expires_in) {
        // token不存在
        next({ name: 'login' });
    } else if (now > token_expires_in) {
        // token过期
        message_error("用户登录已过期，请重新登录！")
        next({ name: 'login' });
    } else {
        next();
    }


    // Ensure we checked auth before each page load.
    // Promise.all([store.dispatch(VERIFY_AUTH)]).then(next);
    store.dispatch(VERIFY_AUTH).then(next);

    // Scroll page to top on every route change
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 200);
});


export default router