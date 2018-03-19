<template>
  <div id="app">
    <v-header :seller="seller"></v-header><!-- 父组件传值给子组件  使用 prop-->
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 引入组件
import Header from './components/header/header'

const ERR_OK = 0

export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  // 在实例创建完成后被立即调用。
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.data
      if (response.errno === ERR_OK) {
        this.seller = response.data
        console.log(this.seller)
      }
    })
  },
  // 注册组件
  components: {
    'v-header': Header
  }
}
</script>

<style lang="stylus">
@import "./common/stylus/mixin.styl";
#app
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex auto
      text-align center
      & > a
        display block
        font-size 14px
        color rgb(77,85,93)
        &.active
          color rgb(240,20,20)
</style>
