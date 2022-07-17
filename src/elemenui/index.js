// 全局引入Element-UI组件
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);




// 按需引入Element-UI组件
// 1、"babel-plugin-component": "^1.1.1",
// 2、"babel-preset-es2015": "^6.24.1",
// 3、.babelrc文件配置
// 4、引入Vue
// 5、在main.js里引入当前文件
import Vue from 'vue'
import { Button, Select, Option } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);