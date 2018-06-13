import Vue from 'vue'
import Router from 'vue-router'
//-------------------------------      一级路由      -------------------------//
import HelloWorld from '@/components/HelloWorld'

import Music from '../components/wangyimusic/Music.vue'   //网易云
// 网易 - 歌单详情
import MusicList from '../components/wangyimusic/MusicList.vue'
// 网易 - 歌曲播放
import MusicPlayer from '../components/wangyimusic/MusicPlayer.vue'
//登陆
import Login from '../components/wangyimusic/Login.vue'
//注册
import Reg from '../components/wangyimusic/Reg.vue'




//-------------------------------      二级路由      -------------------------//

// 网易 - 推荐歌单（首页）
import MusicIndex from '../components/wangyimusic/MusicIndex.vue'
// 我的
import MusicMy from '../components/wangyimusic/MusicMy.vue'
// 我的音乐
import MusicMyPlay from '../components/wangyimusic/MusicMyPlay'
// 搜索
import MusicSeach from '../components/wangyimusic/MusicSeach'
// 主页-轮播
import MusicCarousel from '../components/wangyimusic/MusicCarousel'
// 视频
import MusicVideo from '../components/wangyimusic/MusicVideo'

import MusicRecentPlay from '../components/wangyimusic/MusicRecentPlay'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // ------------------------------ 网易云 -----------------------------
    {
      path: '/music',redirect:'/music/index/carousel',   //默认显示打开
      name: 'Music',
      component: Music,
      children: [
        {
          path: 'index',
          name: 'MusicIndex',
          component: MusicIndex,
          // redirect: 'index',
          children: [
            {
              path: 'carousel',
              name: 'MusicCarousel',
              component: MusicCarousel,
            },
            {
              path: 'video',
              name: 'MusicVideo',
              component: MusicVideo,
            }
          ]
        },
        {
          path: 'my',
          name: 'MusicMy',
          component: MusicMy,
        },
        {
          path: 'mymusic',
          name: 'MusicMyPlay',
          component: MusicMyPlay,
        },
        {
          path: 'seach',
          name: 'MusicSeach',
          component: MusicSeach,
        },
        {
          path: 'recent',
          name: 'MusicRecentPlay',
          component: MusicRecentPlay,
        }
      ]
    },
    {
      path: '/musiclist',
      name: 'MusicList',
      component: MusicList,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg,
    },
    {
      path: '/play',
      name: 'MusicPlayer',
      component: MusicPlayer,
    }

  ]
})
