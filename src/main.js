// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuet from '@/vuet'
import { initPlugins } from '@/plugins/commonPlugins'
import './permission'
Vue.config.productionTip = false
initPlugins(Vue)

/* eslint-disable no-new */
new Vue({
  vuet,
  router,
  render: h => h(App)
}).$mount('#app')
