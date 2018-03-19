import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import Goods from '../components/goods/goods.vue'
import Ratings from '../components/ratings/ratings.vue'
import Seller from '../components/seller/seller.vue'

// 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(Router)

// 定义路由配置
const routes = [
  { path: '/', redirect: '/goods' },
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
]

// 创建路由实例
export default new Router({
  // 全局配置 <router-link> 的默认『激活 class 类名』
  linkActiveClass: 'active',
  routes
})
