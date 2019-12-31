import store from '../store'; // 取出vuex中的app_id
import Layout from "../views/Layout"; // 公共的样式

export default function cool() {
  import( /*webpackChunkName: hb.style*/ "@/styles/cool.scss"); // 引入样式
  // const params = store.getters.app_id + '/cool'; //提取路径变量
  const params = "/app_id/cool";
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
            /*webpackChunkName: 'cool.main.home'*/
            "@/views/cool/main/home"
          ), // Vue-Router + Webpack 路由懒加载实现
        meta: {
          title: "桌面概况",
          icon: "basicInformation"
        }
      }]
    }
  ];
}