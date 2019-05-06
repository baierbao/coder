<template>
    <li>
        <slot></slot>
    </li>
</template>
<script>
export default {
    name:"myLi",
    data(){
        return{

        }
    }
}
</script>
<style scoped>
li{
    width:33.3%;
    text-align: center;
    padding: 20px 0;
    border: solid 1px red;
}
</style>

