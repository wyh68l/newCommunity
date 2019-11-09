import Vue from 'vue'
import App from './App'
import toast from "./components/Toast";

Vue.config.productionTip = false

App.mpType = 'app'

//安装toast插件(自己封装的)
Vue.use(toast);

//注册事件总线
Vue.prototype.$bus = new Vue();

const app = new Vue({
    ...App
})
app.$mount()
