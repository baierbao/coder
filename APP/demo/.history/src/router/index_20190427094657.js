import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Shopping from '@/components/Shopping/Shopping'
import Search from '@/components/Search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/member',
      name:'member',
      component:Member
    },
    {
      path:'/shopping',
      name:'shopping',
      component:Shopping
    }, {
      path:'/search',
      name:'search',
      component:Search
    }
  ]
})
