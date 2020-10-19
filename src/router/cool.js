import store from '../store' // 取出vuex中的app_id
import Layout from '../views/Layout' // 公共的样式

export default function cool() {
  import(/* webpackChunkName: hb.style*/ '@/styles/cool.scss') // 引入样式
  const params = '/' + store.getters.app_id + '/cool' // 提取路径变量
  return [
    // 桌面
    {
      path: `${params}/main`,
      component: Layout,
      name: 'cool.main',
      meta: {
        title: '后台'
      },
      children: [{
        path: 'home',
        name: 'cool.main.home',
        // hidden:true,
        component: () =>
          import(
            /* webpackChunkName: 'cool.main.home'*/
            '@/views/cool/main/home'
          ), // Vue-Router + Webpack 路由懒加载实现
        meta: {
          title: '口袋训练家',
          icon: 'bug'
        }
      }]
    }, {
      path: `${params}/form`,
      component: Layout,
      name: 'cool.form',
      meta: {
        title: '口袋百宝箱',
        icon: 'documentation'
      },
      children: [{
        path: 'basic',
        name: 'form.basic',
        // hidden:true,
        component: () =>
          import(
            /* webpackChunkName: 'cool.form.basic'*/
            '@/views/cool/form/basic'
          ), // Vue-Router + Webpack 路由懒加载实现
        meta: {
          title: '1'
        }
      }, {
        path: 'markdown',
        name: 'form.markdown',
        // hidden:true,
        component: () =>
          import(
            /* webpackChunkName: 'cool.form.markdown'*/
            '@/views/cool/form/markdown'
          ), // Vue-Router + Webpack 路由懒加载实现
        meta: {
          title: '2'
        }

      }]
    }
  ]
}
