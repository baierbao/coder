<template>
  <div>
    <my-ul>
        <my-li v-for="(grid,index) in grids" :key="index">
            <a href="">
                <span :class="grid.name"></span>
                <span>{{grid.title}}</span>
            </a>
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
                  title:'新闻资讯'
              },
               {
                  name:'picShare',
                  title:'图文分享'
              },
               {
                  name:'shopShow',
                  title:'商品展示'
              },
               {
                  name:'feedBack',
                  title:'留言反馈'
              },
               {
                  name:'searchMsg',
                  title:'搜索资讯'
              }, 
              {
                  name:'contactUs',
                  title:'联系我们'
              }
          ]
        }
    }
}
</script>
<style scoped>
.newMsg{
    background-image: url(././assets/img/a.png);
}
a{
    color: black;
    text-decoration: none;
}
</style>

