<template>
  <div>
    <h2>欢迎来到博学课堂</h2>
    <div>请随机挑选一位资深教师~</div>
    <div v-if="loading">loading...</div>
    <modal></modal>
    <img v-if="loaded" :src="result.imgUrl" alt="">
  </div>
</template>

<script lang="ts">

import { ref} from 'vue'; // 引入ref, reactive
import useURLAxios from './hooks/useURLAxios';
import modal from './components/ModalVue.vue';


export default{
  name: 'App',
  components: {modal}, // 注册这个组件
  setup(){
    const {result, loading, loaded, error} = useURLAxios('https://apiblog.jspang.com/default/getGirl');
    return {result, loading, loaded, error};
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
