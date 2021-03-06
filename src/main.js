// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
// import VueResource from 'vue-resource'
import axios from 'axios'

import './common/stylus/index.styl'

// Vue.use(VueResource)
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 注入路由
  router,
  components: { App },
  template: '<App/>'
})
