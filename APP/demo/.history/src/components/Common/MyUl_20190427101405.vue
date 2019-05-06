<template>
    <ul>
        <slot></slot>
    </ul>
</template>
<script>
export default {
    name:"myUl",
    data(){
        return{

        }
    }
}
</script>
<style scoped>
ul{
    display: flex;
    flex-wrap: wrap;
    width:100%;
}
</style>

