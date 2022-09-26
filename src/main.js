import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局样式 重置样式
import '@/assets/style/common.css'

// 注册全局组件
import Components from '@/components'

Vue.config.productionTip = false
Vue.use(Components)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
