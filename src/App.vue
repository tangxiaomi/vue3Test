<template>
  <div>{{nowTime}}</div>
  <div><button @click="getNowTime">显示时间</button></div>
</template>

<script lang="ts">
import { ref} from 'vue'; // 引入ref, reactive
import { nowTime, getNowTime } from './hooks/useNowTime';
interface DataProps{  // 人为定义类型 就是类型注解,不需要ts去自己类型推断
  teachers: string[];
  selectTeacher: string;
  selectTeacherFun: (index: number) => void;
}

export default{
  name: 'App',
  setup(){
    return {nowTime,getNowTime} // 因为需要在模块中使用 所以仍然是需要return的
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
