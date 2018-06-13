<template>
    <div id="concent">
        <section>
            <!-- 轮播 -->
            <div class="block">
                {{banners}}
                <el-carousel height="150px">
                    <el-carousel-item v-for="item in bannerimg" :key="item">
                        <h3>
                            <img :src="IP+item" alt="">
                        </h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </section>
        <!-- 图标 -->
        <section class="section_icon">
            <div>
                <p class="section_icon_img">
                    <img src="./bgimg/收音机.png" alt="">
                </p>
                <p class="section_icon_text">私人FM</p>
            </div>
            <div>
                <p class="section_icon_img">
                    <img src="./bgimg/日历.png" alt="">
                </p>
                <p class="section_icon_text">每日推荐</p>
            </div>
            <div>
                <p class="section_icon_img">
                    <img src="./bgimg/音乐模式.png" alt="">
                </p>
                <p class="section_icon_text">歌单</p>
            </div>
            <div>
                <p class="section_icon_img">
                    <img src="./bgimg/排行榜.png" alt="">
                </p>
                <p class="section_icon_text">排行榜</p>
            </div>
        </section>
        <!-- 推荐歌单 -->
        <section class="recommend_music">
            <div class="recommend_music_div">
                <p>推荐歌单</p>
                <p>
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
            <div class="music_list">
                {{lists}}
                <figure v-for="(item,index) in musiclists" v-if='index<3' @click='figure'>
                    <img v-bind:src='IP+item.img' class="listImg" :id="item._id" />
                    <p >{{item.title}}</p>
                </figure>
            </div>
            <div class="music_list">
                {{lists}}
                <figure v-for="(item,index) in musiclists" v-if='index>=3' :id="item.id" @click='figure'>
                    <img v-bind:src='IP+item.img' class="listImg" :id="item._id" />
                    <p>{{item.title}}</p>
                </figure>
            </div>
        </section>
        <!-- 最新音乐 -->
        <section class="recommend_music">
            <div class="recommend_music_div">
                <p>最新音乐</p>
                <p>
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
            <div class="music_list">
                {{lists}}
                <figure v-for="(item,index) in musiclists" v-if='index<3' :id="item.id">
                    <img v-bind:src='IP+item.img' class="listImg" />
                    <p>{{item.title}}</p>
                </figure>
            </div>
            <div class="music_list">
                {{lists}}
                <figure v-for="(item,index) in musiclists" v-if='index>=3' :id="item.id">
                    <img v-bind:src='IP+item.img' class="listImg" />
                    <p>{{item.title}}</p>
                </figure>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  data() {
    return {
      bannerimg: [],
      musiclists: [],
      IP: "http://172.20.10.5:6868"
    };
  },
  created: function() {
    // console.log(this.$store.state.music)
    this.$store.dispatch({
      type: "music_bannerimg"
    });
    this.$store.dispatch({
      type: "music_list"
    });
  },
  computed: {
    banners() {
      this.$data.bannerimg = this.$store.state.music.bannerArr;
    },
    // 歌单
    lists() {
      this.$data.musiclists = this.$store.state.music.listArr;
    }
  },
  methods: {
    indexmusic() {
      this.$router.push("/music/index/carousel");
    },
    // 点击推荐榜单
    figure() {
      // console.log(event.target.id)
      this.$store.dispatch({
        type: "music_msg",
        id: event.target.id
      });
      this.$router.push("/musiclist");
    },
    seach_inp() {
      this.$router.push("/music/seach");
    },
    FondMusic() {
      console.log("发现音乐");
    },
    Mymucsic() {
      console.log("我的音乐");
      // this.$router.push({ patch: "" });
    },
    Friend() {
      console.log("朋友");
      // this.$router.push({ patch: "" });
    },
    ID() {
      console.log("账号");
      this.$router.push("/music/my");
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

#concent {
  margin-bottom: 4rem;
}

.listImg {
  width: 6rem;
}

.music_list {
  display: flex;
  justify-content: space-around;
}
.music_list > figure {
  width: 33.33%;
}
.music_list p {
  font-size: 0.9rem;
  color: rgb(87, 82, 82);
}
.recommend_music_div {
  display: flex;
  border-left: 0.2rem solid rgba(196, 14, 14, 0.87);
  margin: 0.8rem 0;
}

.recommend_music_div > p {
  margin-left: 0.8rem;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 1rem;
  opacity: 0.75;
  line-height: 3rem;
  margin: 0;
}

.el-carousel__item h3 > img {
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

header {
  display: flex;
  background-color: rgba(226, 50, 6, 0.952);
  padding: 0.5rem 0;
  justify-content: space-around;
}

header img {
  width: 1.5rem;
}

.input_div {
  width: 60%;
}

input {
  width: 100%;
  height: 1.7rem;
  border-radius: 2rem;
  border: 0;
  outline: none;
  padding-left: 1rem;
}

#seach_icon {
  position: absolute;
  right: 4rem;
  top: 1rem;
}

.section_icon {
  display: flex;
  justify-content: space-around;
  border-bottom: 0.1rem solid #ccc;
  padding: 1rem 0;
}

.section_icon_img > img {
  width: 1.5rem;
}

.section_icon_text {
  text-align: center;
  font-size: 0.8rem;
}

footer {
  position: fixed;
  bottom: 0;
  height: 4rem;
  width: 100%;
  text-align: center;
  background: rgb(223, 210, 210);
  /* background-image: url("bgimg/bg.jpg"); */
}

li img {
  width: 1.5rem;
  position: fixed;
  bottom: 2rem;
}

.img1 {
  position: fixed;
  left: 3rem;
}

.img2 {
  position: fixed;
  left: 9rem;
}

.img3 {
  position: fixed;
  left: 14.6rem;
}

.img4 {
  position: fixed;
  right: 0.9rem;
}

ul {
  display: flex;
  justify-content: space-around;
}

footer > ul > li {
  text-align: center;
  list-style: none;
  line-height: 4rem;
}

a {
  text-decoration: none;
  color: black;
  font-size: 0.5rem;
}

.title_div {
  display: flex;
  justify-content: space-around;
  border-bottom: 0.1rem solid #ccc;
  padding: 0.5rem;
}
</style>