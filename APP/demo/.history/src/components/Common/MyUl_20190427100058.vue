<template>
    <ul>
        <slot></slot>
    </ul>
</template>
<script>
export default {
    name:"myUi",
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

