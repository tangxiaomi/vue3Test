<template>
<!-- 挂在到modal节点上 -->
  <teleport to="#modal">
    <div id="center">
      <h2>弹窗测试</h2>
    </div>
  </teleport>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default {

  }
// 为什么要将它挂在不同的节点上？
// Dialog被包裹在其它组件之中，容易被干扰
// 样式也在其它组件中，容易变得非常混乱
</script>

<style>
  #center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>
