import axios from 'axios'

let IP = 'http://172.20.10.5:6868'

export default {
    // ----------------------------------  状态   --------------------------------------
    state: {
        bannerArr: [],   //装轮播
        listArr: [],
        magArr: [],
        playArr: [],
        seachText: [],
        videoArr:[],
    },
    // ----------------------------------  同步   --------------------------------------
    mutations: {
        // 轮播
        music_banner(state, obj) {
            // console.log(obj.bannerVal)
            state.bannerArr = obj.bannerVal
        },
        // 首页歌单
        music_lists(state, obj) {
            // console.log(obj.bannerVal)
            state.listArr = obj.listsVal
        },
        music_mag(state, obj) {
            // console.log(obj.msgVal)
            state.magArr = obj.msgVal
        },
        // 播放
        music_paly(state, obj) {
            state.playArr = obj.playVal
        },
        music_text(state, obj) {
            // console.log(obj.textVal)
            state.seachText = obj.textVal
            // console.log(state.seachText)
        },
        music_vide(state, obj){
            state.videoArr = obj.videoVal
        }
    },
    // -----------------------------------  异步  ------------------------------------
    actions: {
        // 轮播
        music_bannerimg(context, obj) {
            axios.get(IP + '/getbannerimg', { params: {} }).then(function (data) {
                // console.log(data.data[0].img)
                context.commit({
                    type: 'music_banner',
                    bannerVal: data.data[0].img
                })
            })
        },
        // 获取推荐歌单
        music_list(context, obj) {
            axios.get(IP + '/getmusiclist', { params: {} }).then(function (data) {
                // console.log(data.data)
                context.commit({
                    type: 'music_lists',
                    listsVal: data.data
                })
            })
        },
        // 歌单详情
        music_msg(context, obj) {
            // console.log(obj.id)
            axios.get(IP + '/getlists', { params: { _id: obj.id } }).then(function (data) {
                // console.log(data.data)
                context.commit({
                    type: 'music_mag',
                    msgVal: data.data
                })

            })
        },
        // 音乐
        music_musicplay(context, obj) {
            // console.log(obj.id)
            axios.get(IP + '/getplaymusic', { params: { _id: obj.id } }).then(function (data) {
                // console.log(data.data)
                context.commit({
                    type: 'music_paly',
                    playVal: data.data
                })
            })
        },
        music_seach(context, obj) {
            // console.log(obj.text)
            axios.get(IP + "/seach", { params: { name: obj.text } }).then(function (data) {
                // console.log(data.data)
                context.commit({
                    type: 'music_text',
                    textVal: data.data
                })
            })
        },
        // 视频
        music_video(context, obj) {
            // console.log(obj.text)
            axios.get(IP + "/getvideo", { params: { }}).then(function (data) {
                // console.log(data.data)
                context.commit({
                    type: 'music_vide',
                    videoVal: data.data
                })
            })
        }
    },
}