import router from "./router";
import store from "./store";
import NProgress from "nprogress";
import cool from "./router/cool";

NProgress.configure({
    showSpinner: false
}); // NProgress Configuration

const whiteList = ["/login"]; // no redirect whitelist

function checkLogin() {
    let routes = [];
    // switch (1) {
    // case "cool":
    routes = cool();
    // break;
    // }
    console.log(routes);
    router.addRoutes(routes);
    store.commit("SET_ROUTES", routes);
}

router.beforeEach((to, from, next) => {
    NProgress.start();
    // if (whiteList) {
    //     next();
    // } else {
    checkLogin();
    // if (to.path !== "/login") {
    //     next({
    //         path: "/login"
    //     });
    NProgress.done();
    // }
    next(true);
    // }
});

router.afterEach(() => {
    // finish progress bar
    NProgress.done();
});