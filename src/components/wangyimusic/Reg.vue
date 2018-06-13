<template>
    <div>
        <header>
            <div>
                <i class="el-icon-arrow-left" @click="backLogin"></i>
            </div>
            <div class="header_div">手机号注册</div>
        </header>
        <section>
            <!-- <form action="/reg" method="post"> -->
            <p>
                <img src="./bgimg/手机.png" alt="" class="img1">
                <input type="text" v-model="phone" placeholder="输入手机号">
            </p>
            <p>
                <img src="./bgimg/密码.png" alt="" class="img2">
                <input type="password" v-model="pwd" placeholder="设置登陆密码">
            </p>
            <button @click="regBtn">注册</button>
            <!-- </form> -->
        </section>
        <footer>
            <p>其他注册方式</p>
            <div>
                <p>
                    <img src="./bgimg/音乐 (1).png" alt="">
                </p>
                <p>
                    <img src="./bgimg/音乐 (1).png" alt="">
                </p>
                <p>
                    <img src="./bgimg/音乐 (1).png" alt="">
                </p>
                <p>
                    <img src="./bgimg/音乐 (1).png" alt="">
                </p>
            </div>
        </footer>
    </div>
</template>
<script>
    import axios from "axios";

    let IP = "http://172.20.10.5:6868";
    export default {
        data() {
            return {
                phone: "",
                pwd: ""
            };
        },
        methods: {
            backLogin() {
                this.$router.push("/login");
            },
            regBtn() {
                let regobj = {
                    phone: this.phone,
                    pwd: this.pwd
                };
                axios.post(IP + '/reg', regobj).then(function (data) {
                    // console.log(data)
                    // console.log(this)
                    this.$router.push('/login')
                }.bind(this))
            }
        }
    };
</script>
<style scoped>
    header {
        background: rgba(224, 46, 46, 0.836);
        display: flex;
        padding: 1rem;
        margin-bottom: 2rem;
    }

    .header_div {
        margin-left: 6rem;
        color: white;
    }

    section {
        padding: 0 0.5rem;
    }

    input {
        outline: none;
        border: 0;
        border-bottom: 0.1rem solid #ccc;
        width: 85%;
        height: 1.5rem;
        padding-left: 2rem;
    }

    .img1 {
        position: absolute;
        left: 1rem;
        top: 5.5rem;
        width: 1.5rem;
    }

    .img2 {
        position: absolute;
        left: 1rem;
        top: 8.5rem;
        width: 1.5rem;
    }

    form img {
        width: 1.5rem;
    }

    button {
        width: 95%;
        border: 0;
        border-radius: 5rem;
        padding: 0.5rem 0;
        background-color: rgba(202, 20, 20, 0.747);
        margin-top: 1.5rem;
        outline: none;
    }

    footer>div {
        display: flex;
        justify-content: space-around;
    }

    footer>p {
        text-align: center;
    }

    footer img {
        width: 2rem;
    }
</style>