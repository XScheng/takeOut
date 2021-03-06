// 入口文件
import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import './mock/mockServer' //加载mockServer即可
import loading from './common/imgs/loading.gif'
import './filters' //加载过滤器

//注册全局组件标签
Vue.component(Button.name,Button) 
Vue.use(VueLazyload, {
  loading
})

new Vue({
  el:'#app',
  render:h => h(App),
  router,//使用上vue-router
  store,//使用上vuex
})