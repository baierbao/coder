<template>
    <div class="banner">
        <div class="list">
             <router-link :to="{name:'Menu1'}">首页1</router-link>
              <router-link :to="{name:'Menu2'}">首页2</router-link>
             <!-- <router-link to="Menu2">首页2</router-link> 有bug-->
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return{
          bannerArr:[
              {name:'menu01'},
              {name:'menu02'},
              {name:'menu03'}
              ],
      }
  },  
}
</script>
<style scoped>
.banner{
    width: 100%;
    background-color: #96B97D;
    border: solid 1px #96B97D;
}
.list{
    width: 80%;
    margin: 0px auto;
    padding:6px 0;
}
.list a{
    margin:0 30px;
    color: white;
    text-decoration: none;
}
.list a:hover{
    color: red;
    text-decoration:underline;
    border-bottom: 2px solid white;
    
  
}
</style>
