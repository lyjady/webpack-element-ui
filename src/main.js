import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import app from './App.vue';

const vm = new Vue({
    el: '#app',
    render: c => c(app)
});