<template>
    <div class="body">
        <div class="header">
            <div class="header_img">
                <img src="../assets/image/logo2.png" alt="">
            </div>
            <div class="header_text">
                <span>{{title}}</span><br/>
                <span>--毛泽东</span>
            </div>
        </div>
        <div class="headImage">
            <img src="../assets/image/logo1.png">
        </div>
        <div class="toHome">
            <router-link to="/home">进去首页</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           title:"多少事，从来急：天地转，光阴迫。  一万年太久，只争朝夕。"
        }
    }
}
</script>
<style scoped>
.body{
    height:100%;
    background:url(../assets/image/backimg.jpg) no-repeat;
    background-size: 100% 100%;
    opacity: 0.8;
}
.header{
    width: 100%;
    padding: 12px 0;
    border-bottom: solid 2px lightgrey;
    display: flex;
    justify-content: center;
}
.header_img{
    width:200px;
    height: 72px;
}
.header_img img{
    width: 100%;
}
.header_text{
    height:72px;
    margin-left:50px;
    line-height: 36px;
}
.header_text span{
    color: #6C4327;
    font-size: 18px;
    font-weight: 600;
    font-style: italic; 
}
.header_text span:last-child{
    margin-left: 72%;
}
.headImage{
    width: 100px;
    height: 100px;
    border: solid 6px gold;
    /* background-color: gold; */
    border-radius: 50%;
    margin: 100px auto;

}
.headImage img{
    width: 100px;
    height:100px;
    border-radius: 50%;
}
.toHome{
    width: 200px;
    border:1px solid;
    margin:180px auto;
    text-align: center;
    font-size: 40px;
    border-radius: 10px;
}
.toHome a{
    text-decoration: none;
    color: aliceblue;
}
</style>
