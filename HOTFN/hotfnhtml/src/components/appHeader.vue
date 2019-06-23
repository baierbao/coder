<template>
    <div class="header">
        <div class="headerCont">
        <div class="logoBox">
            <img class="logo" src="../assets/image/logo2.png" alt="">
        </div>
        <div class="login"> 
           <span>公告：欢迎光临只争朝夕！欢迎独立博客博主和我友链哦，如果你有什么好的建议或意见请留言给我哦！</span>
        </div>
        </div>
    </div>
</template>
<script>

export default {
   
}
</script>
<style scoped>
.header{
   width:100%;
   padding: 14px 0;
   background-color:#F6F6F6; 
   /* border: solid 1px; */
}
.headerCont{
    width: 80%;
    margin:0px auto;
    /* border:solid 1px; */
    display: flex;
   justify-content:space-between; 
}
.logoBox{
    width: 300px;
    /* border: solid 1px; */
}
.logo{
    width: 200px;
}
.login{
    width: 500px;
    border: 1px dashed;
}
</style>
