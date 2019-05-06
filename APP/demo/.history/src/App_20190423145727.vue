<template>
  <div id="app">
   <mt-header fixed title="固定在顶部"></mt-header>
   <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="./assets/a.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="./assets/a.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="./assets/a.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./assets/a.png">
        我的
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

  }
}
</script>

<style>

</style>
