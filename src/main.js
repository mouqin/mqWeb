// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'    //引入vuex


//------------------------------------    引入 Element   ------------------------------//
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { stat } from 'fs';
Vue.use(ElementUI);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})




// -------------------- 测试vuex ------------------

// const store = new Vuex.Store({
//   state: {
//     name: 'AAA',
//     age: 12,
//     gender: "男"
//   },
//   mutations: {
//     text(state, obj) {   //第一个参数state传入的是整个状态，第二个参数obj传入的是提交的mutation的载荷
      // console.log(state)
      // console.log(obj)    //打印出来是store.commit整个对象

      // state.age=20     //第一种：修改直接传入参数.修改
    //   state.age = obj.age   //第二种
    // },
    // text1(){
      //和text一样
  //   }
  // },
//   actions: {      
//     actions_text({commit}){
//       commit('actions_text')
//     }
//   },
// })


// actions_text(context){
//   console.log(context)
// }


// ------------触发mutations  -------------------
// store.commit('text')            //第一种提交方式,第一个参数是函数名
// store.commit({                  //第二种提交方式
//   type: 'text',
//   age: 30
// })



// ------------触发actions -----------------------
// store.dispatch('actions_text')

// console.log(store.state)