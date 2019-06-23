import Vue from 'vue'
import Router from 'vue-router'
import appIndex from '@/view/appIndex'
import hotfnIndex from '@/view/hotfnIndex'
import Menu1 from '@/view/Menu1'
import Menu2 from '@/view/Menu2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hotfnIndex',
      component: hotfnIndex
    },
    {
      path: '/home',
      name: 'appIndex',
      component: appIndex,
      children:[
        {path:'/',name:'Menu1',component:Menu1},
        {path:'Menu1',name:'Menu1',component:Menu1},
        {path:'Menu2',name:'Menu2',component:Menu2},
      ]
    },
  ]
})
