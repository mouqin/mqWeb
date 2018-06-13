<template>
    <div>
        <div>
            <router-view>
            </router-view>
        </div>
        <footer>
            <ul>
                <li>
                    <a @click='FondMusic'>发现音乐
                        <img src="./bgimg/音乐 (1).png" alt="" class="img1">
                    </a>
                </li>
                <li>
                    <a @click='Mymucsic'>我的音乐
                        <img src="./bgimg/音乐.png" alt="" class="img2">
                    </a>
                </li>
                <li>
                    <a @click='Friend'>朋友
                        <img src="./bgimg/人3.png" alt="" class="img3">
                    </a>
                </li>
                <li>
                    <a @click='ID'>账号
                        <img src="./bgimg/人物.png" alt="" class="img4">
                    </a>
                </li>
            </ul>
        </footer>
    </div>
</template>
<script>

    export default {
        methods: {
            FondMusic() {
                console.log("发现音乐");
                this.$router.push({path:"/music/index"});
            },
            Mymucsic() {
                console.log("我的音乐");
                this.$router.push("/music/mymusic");
            },
            Friend() {
                console.log("朋友");
                // this.$router.push({ patch: "" });
            },
            ID() {
                console.log("账号");
                this.$router.push("/music/my");
            },
        }
    };
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
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

    footer>ul>li {
        text-align: center;
        list-style: none;
        line-height: 4rem;
    }

    a {
        text-decoration: none;
        color: black;
        font-size: 0.5rem;
    }

  
</style>