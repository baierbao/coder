import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Member from '@/components/home/member'
import Shopping from '@/components/home/shopping'
import Serach from '@/components/home/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    }, {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
