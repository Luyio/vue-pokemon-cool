import router from "./router";
import store from "./store";
import NProgress from "nprogress";
import cool from "./router/cool";

NProgress.configure({
    showSpinner: false
}); // NProgress Configuration

const whiteList = ["/login"]; // no redirect whitelist

function checkLogin() {
    return new Promise((resolve, reject) => {
        if (store.getters.is_login) {
            resolve();
            return;
        }
        store
            .dispatch("GetInfo")
            .then(() => {
                let routes = [];
                switch (store.getters.module_name) {
                    case "cool":
                        routes = cool();
                        break;
                }
                router.addRoutes(routes);
                store.commit("SET_ROUTES", routes);
                resolve(true);
            })
            .catch(() => {
                reject();
            });
    });
}

router.beforeEach((to, from, next) => {
    NProgress.start();
    if (whiteList.indexOf(to.path) !== -1) {
        next();
    } else {
        checkLogin()
            .then(function () {
                    if (to.path === '/login') {
                        next({
                            path: '/'
                        })
                    } else next()
                }
                // routerChanged => {
                //     //不许在登陆状态下进登陆页面
                //     if (to.path === "/login") {
                //         next({
                //             path: "/"
                //         });
                //         NProgress.done(); // if current page is dashboard will not trigger	afterEach hook, so manually handle it
                //     } else {
                //         if (routerChanged)
                //             next({
                //                 ...to,
                //                 replace: true
                //             });
                //         else next();
                //     }
                // }

            )
            .catch(
                //未登陆
                () => {
                    next("/login");
                    NProgress.done();
                }
            );
    }
});
router.afterEach(() => {
    // finish progress bar
    NProgress.done();
});