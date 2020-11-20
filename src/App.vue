<template>
  <div>
    <Suspense>
      <!-- 正常请求的结果 -->
      <template #default>
        <!-- <AsyncShow/> -->
        <girl-show/>
      </template>
      <!-- 请求有误的结果 -->
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">

import { ref, onErrorCaptured } from 'vue'; // 引入ref, reactive
// import AsyncShow from './components/AsyncShow.vue';
import GirlShow from './components/GirlShow.vue';


export default{
  name: 'App',
  components: { GirlShow },
  setup(){
     onErrorCaptured((error) => {
      console.log(`error====>`,error)
      return true  
    })
    return {}
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
