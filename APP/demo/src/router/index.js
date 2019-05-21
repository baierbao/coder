import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Shopping from '@/components/Shopping/Shopping'
import Search from '@/components/Search/Search'
import NewsList from '@/components/News/NewsList'  // 新闻列表

Vue.use(Router)

export default new Router({
  routes: [
    {
      //首先进行路由重定向操作
      path:'/',
      redirect:{name:'home'},   //   '/home'  也可以
    },
    {
      path:'/home',
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
    },
    // 新闻列表
    {
      name:'news.list',
      path:'/news/list',
      component:NewsList
    }
  ]
})
