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
  created(){
    this.showMonth()
  },
  methods:{
      showMonth(){
        var date=new Date();
        var mons = [];
        var days=mons[date.getMonth()]-_getNum(date.getDate())+1  // 当前月总天数-当前日前+1
        var year=new Date().getFullYear();
        function _getNum(num){
            if(num<10)
                return "0"+num;
            else
                return num;
        }
        // 判断是否闰年
        if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
            mons = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        }else{
            mons=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        }
        // 判断是否小于等于5个自然日 
        if(days<=5){
            return _getNum((new Date().getMonth()+1)+1)   //当天月+1
        }else{
            return _getNum(new Date().getMonth()+1)
        }
    }
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
