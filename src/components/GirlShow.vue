<template>
  <img :src="result && result.imgUrl"/>
</template>
<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
export default defineComponent({
    async setup(){ // 使用promise的语法糖 返回的依旧是promise对象
      const rawData = await axios.get('https://apiblog.jspang.com/default/getGirl')
      return {result: rawData.data}
    }
})
</script>