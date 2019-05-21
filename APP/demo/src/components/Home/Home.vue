<template>
  <div>
    <my-ul>
        <my-li v-for="(grid,index) in grids" :key="index">
            <!-- <a href="">
                <span :class="grid.name"></span>
                <span>{{grid.title}}</span>
            </a> -->
            <router-link :to='grid.router'>
                <span :class="grid.name"></span>
                <span>{{grid.title}}</span>
            </router-link>
        </my-li>
    </my-ul>
  </div>
</template>
<script>
export default {
    name:"home",
    data(){
        return{
          grids:[
              {
                  name:'newMsg',
                  title:'新闻资讯',
                  router:{
                      name:'news.list'
                  }
              },
               {
                  name:'picShare',
                  title:'图文分享',
                  router:{
                      name:'news.list'
                  }
              },
               {
                  name:'shopShow',
                  title:'商品展示',
                  router:{
                      name:'news.list'
                  }
              },
               {
                  name:'feedBack',
                  title:'留言反馈',
                  router:{
                      name:'news.list'
                  }
              },
               {
                  name:'searchMsg',
                  title:'搜索资讯',
                  router:{
                      name:'news.list'
                  }
              }, 
              {
                  name:'contactUs',
                  title:'联系我们',
                  router:{
                      name:'news.list'
                  }
              }
          ]
        }
    }
}
</script>
<style scoped>
.newMsg{
    background-image: url(../../assets/img/newMsg.png);
    background-repeat: no-repeat;
    background-size: 40px 40px;
    background-position: center;
    width: 40px;
    height:40px;
    display: block;
    /* border: solid 1px; */
    margin:8px auto;
}
.picShare{
    background-image: url(../../assets/img/picShare.png);
    background-repeat: no-repeat;
    background-size: 40px 40px;
    background-position: center;
    width: 40px;
    height:40px;
    display: block;
    margin:8px auto;
}
.shopShow{
    background-image: url(../../assets/img/shopShow.png);
    background-repeat: no-repeat;
    background-size: 40px 40px;
    background-position: center;
    width: 40px;
    height:40px;
    display: block;
    margin:8px auto;
}.feedBack{
    background-image: url(../../assets/img/feedback.png);
    background-repeat: no-repeat;
    background-size: 40px 40px;
    background-position: center;
    width: 40px;
    height:40px;
    display: block;
    margin:8px auto;
}.searchMsg{
    background-image: url(../../assets/img/searchMsg.png);
    background-repeat: no-repeat;
    background-size: 40px 40px;
    background-position: center;
    width: 40px;
    height:40px;
    display: block;
    margin:8px auto;
}.contactUs{
    background-image: url(../../assets/img/tell_me.png);
    background-repeat: no-repeat;
    background-size: 40px 40px;
    background-position: center;
    width: 40px;
    height:40px;
    display: block;
    margin:8px auto;
}
a{
    color: black;
    text-decoration: none;
}
</style>

