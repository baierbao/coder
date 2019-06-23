<template>
    <div>
        <ul>
            <li v-for="item in 20">{{item}}</li>
        </ul>
        <p>Menu1</p>
    </div>
</template>
<script>
export default {
    name:'Menu1',
   data(){
       return{
           msg:'我是menu1',
       }
   }
}
</script>
<style scoped>

</style>
