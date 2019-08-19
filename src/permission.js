// 登录权限验证
import router from './router'
// import store from './store'
// import {
//     Message
// } from 'element-ui'
import NProgress from 'nprogress'

NProgress.configure({
    showSpinner: false
}) // NProgress Configuration

// const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach((to, from, next) => {
    NProgress.start()
    if (to.path !== '/login') {
        next({
            path: '/login'
        })
        NProgress.done()
    }
    next(true);
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})