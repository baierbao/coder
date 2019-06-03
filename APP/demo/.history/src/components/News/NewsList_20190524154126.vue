<template>
    <div>
        <div class="newsList" v-for="(item,index) in newsArr" :key="item.id">
            <div class="newsImg">
                <img :src="item.url" alt="">
            </div>
            <div class="newsContent">
                <!-- <a href="www.baidu.com">{{item.newsTitle}}</a> -->
                <p class="title">{{item.newsTitle}}</p>
                <p><span>点击次数:{{item.click}}</span><span>{{item.time}}</span></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'news.list',
    data(){
        return{
          newsArr:[
              {id:11111,
               url:'http://img2.imgtn.bdimg.com/it/u=1451330793,2242997567&fm=26&gp=0.jpg',
               newsTitle:'小米辟谣官微信息：恶意抹黑小米官微纯属造谣',
               click:'222',
               time:'423435222',
              }
          ],
        }
    },
    methods:{
        getData:{
            
        }
    }
}
</script>
<style scoped>
.newsList{
    width: 94%;
    min-height: 80px;
    border-bottom: dotted 1px lightgray;
    padding: 8px 0px;
    margin:0 auto;
    display: flex;
    justify-content:space-between;
}
.newsImg{
    flex: 3;
}
.newsContent{
    padding-left: 10px;
    flex:7;
}
.newsImg img{
    width:100%;
}
/* .newsContent p:first-child:visited{
     color: red;
} */
.title:link{
     color: blue;
}
.title:visited{
     color: red;
}
.title:hover{
     color: greenyellow;
     background: brown;
}
.title:active {
     color: orange;
}
.newsContent p:last-child{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}
</style>
