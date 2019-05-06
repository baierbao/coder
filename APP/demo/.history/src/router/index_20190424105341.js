import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Member from '@/components/member/member'
import Shopping from '@/components/shopping/shopping'
import Search from '@/components/search/search'

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
