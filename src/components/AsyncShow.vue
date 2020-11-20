//返回的是promise对象
<template>
  <div id="center">
    <h1>{{result}}</h1>
  </div>
</template>

<script lang="ts">
// 用来解决TypeScript情况下，传统的Vue.extends无法对组件给出正确的参数类型推断的。也就是说在TypeScript环境中如果参数类型推断不正常时，用defineComponent()组件来进行包装函数。
  import { defineComponent } from 'vue' // 多给我们一下提示 会提示setup等等的写法
  export default defineComponent({
    setup(){
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          return resolve({result: 'test'})
        }, 2000);
      })
    }
  })
</script>

<style>

</style>
