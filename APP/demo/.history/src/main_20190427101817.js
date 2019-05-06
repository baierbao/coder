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

import MyUi from './components/Common/MyUl'
import MyLi from './components/Common/MyLi'
Vue.components(MyUi.name,myUl)
Vue.components(MyLi.name,myLi)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
