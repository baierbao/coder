<template>
    <div>
        <div class="newsList" v-for="(item,index) in newsArr" :key="index">
            <div class="newsImg">
                <img :src="item.url" alt="">
            </div>
            <div class="newsContent">
                <p>{{item.newsTitle}}</p>
                <p><span>{{item.click}}</span><span>{{item.time}}</span></p>
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
              {Id:11111,
               url:'http://img2.imgtn.bdimg.com/it/u=1451330793,2242997567&fm=26&gp=0.jpg',
               newsTitle:'小米辟谣官微信息：恶意抹黑小米官微 纯属造谣',
               click:'222',
               time:'13454657658568'
              }
          ],
        }
    }
}
</script>
<style scoped>
.newsList{
    width: 100%;
    min-height: 120px;
    border-bottom: dotted 1px lightgray;
    padding: 8px 0px;
}
</style>
