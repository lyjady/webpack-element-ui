import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import app from './App.vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    //类似data
    state: {
        count: 1
    },
    //类似methods
    mutations: {
        increment(state, step) {
            console.log(step);
            state.count += (step.a + step.b);
        },
        sub(state) {
            state.count--;
        }
    },
    //只负责对外提供数据不负责修改数据,类似于filter,也类似于computed,当getter中引用的数据发生了变化就会执行相应的getter的方法
    getters: {
        optCount: function (state) {
            return '当前最新的count: ' + state.count;
        }
    }
});

const vm = new Vue({
    el: '#app',
    render: c => c(app),
    store: store
});

// Vuex是为了保存组件之间的共享数据而诞生的,如果组件之间有数据要共享, 可以直接挂载到Vuex上.不需要通过父子组件传值。
//私有数据定义到组件中, 共享数据定义到Vuex中

//$store.state.count 取值
//this.$store.commit('increment', {a: 1, b: 19}); 调用方法(第二个参数是调用方法时候要传递的参数, 只能有一个参数, 可以传一个对象)
//不要在组件内定义方法去操作state中的数据,这样能避免混乱,要使用mutation中的方法来操作数据

//总结:
//1. state中的数据不能直接修改需要在mutation中修改
//2. 组件使用$store.state.xxx来获取数据
//3. 组件使用this.$store.xxx('mutation方法名', arg); 来执行mutation的方法来改变数据
//4. 如果store中的数据对外提供需要包装可以再getter指定相应的方法, 组件使用this.$store.getter.xxx

