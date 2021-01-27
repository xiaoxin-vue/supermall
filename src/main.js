import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

// 创建事件总线$bus 
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)

// 解决移动端300ms的延迟
FastClick.attach(document.body)

// 使用懒加载的插件
const loadimage = require('assets/img/common/placeholder.png')
Vue.use(VueLazyload, {
  loading: loadimage
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
