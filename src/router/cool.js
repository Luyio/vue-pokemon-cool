// import store from '../store';// 取出vuex中的app_id
import Layout from '../views/layout/Layout'; // 公共的样式

export default function cool() {
  import( /*webpackChunkName: hb.style*/ "@/styles/cool.scss"); // 引入样式
  // const params = '/app/' + store.getters.app_id + '/cool'; //提取路径变量
  const params = "/app/app_id/cool/";
  return [
    // 桌面
    {
      path: `${params}/main`,
      component: Layout,
      name: "cool.main",
      meta: {
        title: "后台"
      },
      children: [{
        path: "home",
        name: "cool.main.home",
        // hidden:true,
        component: () =>
          import(
            /*webpackChunkName: 'cool.main.index'*/
            "@/views/cool/main/index"
          ), // Vue-Router + Webpack 路由懒加载实现
        meta: {
          title: "桌面概况",
          icon: "basicInformation"
        }
      }]
    }
  ];
}