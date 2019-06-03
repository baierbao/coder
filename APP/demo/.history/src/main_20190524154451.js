// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入自己的css
import './assets/css/global.css'
Vue.use(mint)
//引入自己的组件
import MyUl from './components/Common/MyUl'
import MyLi from './components/Common/MyLi'
//全局注册使用
Vue.component(MyUl.name,MyUl)
Vue.component(MyLi.name,MyLi)
//引入axios
import axios from 'axios'
Vue.prototype.$axios=axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
