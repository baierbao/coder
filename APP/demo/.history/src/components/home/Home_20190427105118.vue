<template>
  <div>
    <my-ul>
        <my-li v-for="(grid,index) in grids" :key="index">
            <a href="">
                <span :class="name"></span>
                <span>{{title}}</span>
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
                  name:'newMsg',
                  title:'新闻资讯'
              },
               {
                  name:'newMsg',
                  title:'新闻资讯'
              },
               {
                  name:'newMsg',
                  title:'新闻资讯'
              },
               {
                  name:'newMsg',
                  title:'新闻资讯'
              }, 
              {
                  name:'newMsg',
                  title:'新闻资讯'
              }
          ]
        }
    }
}
</script>
<style scoped>
/* ul{
    display: flex;
    flex-wrap: wrap;
    width:100%;
}
li{
    width:33.3%;
    text-align: center;
    padding: 20px 0;
} */
a{
    color: black;
    text-decoration: none;
}
</style>

