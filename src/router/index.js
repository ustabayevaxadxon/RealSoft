import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/java",
        component: () => import("../views/JavaCoursePage.vue"),
    },
    {
        path: "/flutter",
        component: () => import("../views/Flutter.vue"),
    },
    {
        path: "/graphics",
        component: () => import("../views/Design.vue"),
    },
    {
        path: "/android",
        component: () => import("../views/Android.vue"),
    },
    {
        path: "/:catchAll(.*)",
        component: () => import("../views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return new Promise((resolve, reject) => {
                const el = document.querySelector(to.hash);
                if (el) {
                    const scrollTop =
                        window.pageYOffset ||
                        document.documentElement.scrollTop ||
                        document.body.scrollTop ||
                        0;
                    const targetTop =
                        el.getBoundingClientRect().top + scrollTop;
                    window.scrollTo({
                        top: targetTop,
                        behavior: "smooth",
                    });
                    setTimeout(() => {
                        history.replaceState(null, null, to.path);
                        resolve();
                    }, 1000);
                } else {
                    reject({ message: "Element not found" });
                }
            });
        } else {
            return { x: 0, y: 0 };
        }
    },
    // scrollBehavior(to, from, savedPosition) {
    //     if (to.hash) {
    //         return {
    //             el: to.hash,
    //             behavior: "smooth",
    //         };
    //     }
    // },
});

export default router;
