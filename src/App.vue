<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>欢迎光临学习vue3</h2>
  <div>请选择一位老师</div>
  <div>
    <button 
    v-for="(item, index) in teachers"
    v-bind:key="index"
    @click="selectTeacherFun(index)">
      {{index}}:{{item}}
    </button>
  </div>
  <div>你选择了【{{selectTeacher}}】来教学</div>
</template>

<script lang="ts">
import { ref, reactive, toRefs, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onUnmounted, onActivated, onDeactivated, onErrorCaptured } from 'vue'; // 引入ref, reactive

interface DataProps{  // 人为定义类型 就是类型注解,不需要ts去自己类型推断
  teachers: string[];
  selectTeacher: string;
  selectTeacherFun: (index: number) => void;
}

export default{
  name: 'App',
  setup(){
    console.log('1组件在创建执行')
    const data: DataProps = reactive({
      teachers: ['汪老师', '张老师', '汤老师', '潘老师'],
      selectTeacher: '',
      selectTeacherFun: (index: number) => {
        data.selectTeacher = data.teachers[index]; // 使用ref得到和修改这个变量的值，都需要加上.value
     }
    })

      onBeforeMount(() => {
        console.log('2组件在挂载页面之前执行')
      })

      onMounted(() => {
        console.log('3组件在挂载到页面之后执行')
      })

      onBeforeUpdate(() => {
         console.log('4组件更新之前执行')
      })

      onUpdated(() => {
         console.log('5组件更新之后执行')
      })
      
    //   onBeforeUnmount(() => { // 和vue2的名字不同
    //     console.log('在组件销毁之前执行')
    //   })

    //    onUnmounted(() => {
    //     console.log('在组件销毁之后执行')
    //   })

    // // 只有在这个组件的时候，才会多出下边的2个组件<keep-alive></keep-alive>
    //   onActivated(() => { 
    //     console.log('')
    //   })

    //    onDeactivated(() => { 
    //     console.log('')
    //   })

    //   onErrorCaptured(() => {
    //     console.log('当捕获一个来自子孙组件的异常时激活钩子函数')
    //   })
    const refData = toRefs(data);  // 包装一下对象，return的时候用扩展运算符，既可以在模板中不使用data.xx
    // ref的用法
    // const teachers = ref(['汪老师', '张老师', '汤老师', '潘老师']); // ref是全局的 可以在模板中使用,需要return才可以
    // const selectTeacher = ref('');
    // const selectTeacherFun = (index: number) => {
    //   selectTeacher.value = teachers.value[index]; // 使用ref得到和修改这个变量的值，都需要加上.value
    // }
    return{
      // data
      ...refData
    }
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
