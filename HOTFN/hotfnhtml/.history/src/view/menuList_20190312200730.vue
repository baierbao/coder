<template>
    <div>
        <div v-for="(item,index) in menuList" :key=index>
            <div>{{item.name}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
      return {
        menuList:[
            {
            name:"Menu01"
            },
            {
            name:"Menu02"
            },
            {
            name:"Menu03"
            },
            {
            name:"Menu04"
            },
            {
            name:"Menu05"
            },
        ]
      }
    }
}
</script>
<style scoped>

</style>
