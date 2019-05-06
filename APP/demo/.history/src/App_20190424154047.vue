<template>
  <div id="app">
   <mt-header  title="固定在顶部"></mt-header>
   <div>
      <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
   </div>
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
      selected:""
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

</style>
