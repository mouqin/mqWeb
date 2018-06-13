import Vue from 'vue'
import Vuex from 'vuex'   //引入Vuex

//--------------------------- 引入模块 ---------------------------- //
// 模块 - 音乐
import music from './module/music'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        music,
        
    }
})
