<template>
  <div id="app">
   <mt-header  title="固定在顶部"></mt-header>
   <div style="width:100%;height:200px">
      <mt-swipe :auto="4000">
      <mt-swipe-item><img src="./assets/img/1.jpg" alt="" class="swipe"></mt-swipe-item>
      <mt-swipe-item><img src="./assets/img/2.png" alt="" class="swipe"></mt-swipe-item>
      <mt-swipe-item><img src="./assets/img/3.jpg" alt="" class="swipe"></mt-swipe-item>
      <mt-swipe-item><img src="./assets/img/4.jpg" alt="" class="swipe"></mt-swipe-item>
    </mt-swipe>
   </div>
   <router-view></router-view>
   <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/img/a.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/img/a.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopping">
        <img slot="icon" src="./assets/img/a.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/img/a.png">
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
      selected:"",
      day:""
    }
  },
  methods:{

  },
  watch:{
    selected(newValue, oldValue){
      // console.log(newValue)
      console.log(this.$router)
      this.$router.push({
        name:newValue
      })
      
    }
  }
}
</script>

<style scoped>
.swipe{
  width:100%
}
</style>
