<template>
    <div>
        <div v-for="(item,index) in newsArr" :key="index">
            <div class="newsImg">
                <img src="" alt="">
            </div>
            <div class="newsContent">
                <p>{{newsTitle}}</p>
                <p><span>{{click}}</span><span>{{time}}</span></p>
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

</style>
