import { createApp } from 'vue'; // vue3才有的
import App from './App.vue'; // 引入自定义组件 在页面上看的东西基本都在这个组件里

createApp(App).mount('#app'); // 将App挂载到#app节点上，在public目录下的index.html中找节点
