<template>
    <div>
        <app-header></app-header>
        <app-banner></app-banner>
        <!-- app-bannner内子路由渲染区 -->
        <div class="content">
            <div class="viewShow">
                <router-view></router-view>
            </div>
            
            <div class="box"></div>
        </div>
        
    </div>
</template>
<script>
import appHeader from '@/components/appHeader.vue'
import appBanner from '@/components/appBanner.vue'
export default {
    components:{
        appHeader,
        appBanner,
    }
}
</script>
<style scoped>
.content{
    width: 80%;
    padding:20px 10%;
    background-color:#F6F6F6; 
  
    display: flex;
    justify-content: space-between;
}
.viewShow{
    width: 70%;
    border: solid 1px;
    border-radius: 6px;
}
.box{
    width: 26%;
    border:solid  1px;
}
</style>
