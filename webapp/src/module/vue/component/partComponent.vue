<template>
    <div>
      <input v-model="title" type="text" placeholder="请输入局部组件内容">{{title}}
    </div>
</template>

<script>
    export default {
      data(){
        return{
          title: "局部组件"
        }
      }
    }
</script>

<style scoped>

</style>
