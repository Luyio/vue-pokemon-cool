const getters = {
  module_name: state => state.user.data.module_name,
  routes: state => state.routes,
  user: state => state.user.data,
  app_id: state => state.user.data.app_id,
  is_login: state => state.user.is_login

};

export default getters;
