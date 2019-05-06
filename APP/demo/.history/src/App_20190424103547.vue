<template>
  <div id="app">
   <mt-header fixed title="固定在顶部"></mt-header>
   <router-view></router-view>
   <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/a.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/a.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopping">
        <img slot="icon" src="./assets/a.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/a.png">
        查找
      </mt-tab-item>
   </mt-tabbar>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      selected:1
    }
  },
  methods:{

  },
  watch:{
    selected:(newValue, oldValue)=>{
      console.log(newValue)
      this.$Router.push({
        name:newValue
      })
    }
  }
}
</script>

<style>

</style>
