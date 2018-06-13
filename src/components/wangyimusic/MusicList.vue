<template>
    <div>
        <div class="bg_div">
            <header>
                <i class="el-icon-arrow-left" @click="backindex"></i>
                <span>歌单</span>
                <i class="el-icon-more"></i>
            </header>
            {{mags}}
            <!-- 数据库获取头像 -->
            <section class="IMG_section">
                <div>
                    <img :src='IP+mag.img' class="surface_img">
                </div>
                <div>
                    <p>{{mag.title}}</p>
                </div>
            </section>
            <!-- 图标 -->
            <section class="two_section">
                <div>
                    <p>
                        <img src="./bgimg/文件.png" alt="">
                    </p>
                    <p>3321</p>
                </div>
                <div>
                    <p>
                        <img src="./bgimg/评论.png" alt="">
                    </p>
                    <p>30</p>
                </div>
                <div>
                    <p>
                        <img src="./bgimg/转发.png" alt="">
                    </p>
                    <p>17</p>
                </div>
                <div>
                    <p>
                        <img src="./bgimg/下载.png" alt="">
                    </p>
                </div>
            </section>
            <section class="play_section">
                <div>
                    <i class=" el-icon-caret-right"></i>
                    <span>播放全部</span>
                    <span>（共:{{mag.musics.length}}首)</span>
                </div>
                <div>
                    <span>多选</span>
                </div>
            </section>
            <section v-for="(item,index) in mag.musics" @click='listClick' class="list_section">
                <div class="list_div">
                    <div>
                        <p>{{index+1}}</p>
                    </div>
                    <div>
                        <p :id="item._id" >{{item.name}}</p>
                        <p>{{item.singer}}</p>
                    </div>
                    <div>
                        <p>
                            <img src="./bgimg/手机.png" alt="">
                        </p>
                    </div>
                </div>
            </section>
        </div>

    </div>
</template>
<script scopde>
    export default {
        data() {
            return {
                mag: [],
                IP: "http://172.20.10.5:6868"
            };
        },
        methods: {
            //  返回按钮
            backindex() {
                this.$router.push("/music/index");
            },
            // 点击音乐跳转
            listClick() {
                // console.log(event.target);
                console.log(this.mag.musics)
                this.$store.dispatch({
                    type: "music_musicplay",
                    id: event.target.id,
                });
                this.$router.push("/play");
            }
        },
        computed: {
            mags() {
                this.$data.mag = this.$store.state.music.magArr;
                // console.log(this.$store.state.music);
            }
        }
    };
</script>
<style scoped>
    header {
        display: flex;
        height: 3rem;
    }

    header>span {
        margin: 0 7rem;
    }

    .list_section {
        display: flex;
        border-bottom: 0.1rem solid #ccc;
    }

    .bg_div {
        background-image: url("bgimg/bg.jpg");
        height: 15rem;
        padding: 1rem 1rem;
    }

    /* 头像 */

    .surface_img {
        width: 8rem;
    }

    .IMG_section {
        display: flex;
    }

    .IMG_section p {
        margin-left: 2rem;
    }

    .two_section {
        display: flex;
        justify-content: space-around;
    }

    .two_section img {
        width: 1.6rem;
    }

    .two_section p {
        font-size: 0.8rem;
    }

    .play_section {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
    }

    .list_div {
        display: flex;
    }
</style>