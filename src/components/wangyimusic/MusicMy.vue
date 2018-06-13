<template>
    <div>
        <header>
            <div class="header_div">手机号登陆</div>
        </header>
        <section class="header_section">
            <div class="header_img" @click='header_Img_Click'>
                <!-- <img src="" alt=""> -->
                <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
            <div>
                <p @click='loginClick' v-model="name">请登录</p>
            </div>
            <div>
                <p>签到</p>
            </div>
        </section>
        <section class="info_section">
            <div>
                <p>动态</p>
                <p>1</p>
            </div>
            <div>
                <p>关注</p>
                <p>2</p>
            </div>
            <div>
                <p>粉丝</p>
                <p>0</p>
            </div>
            <div>
                <p>我的资料</p>
            </div>
        </section>
        <div class="concent">
            <div class="concent_div">
                <p>我的消息</p>
                <p>
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
            <div class="concent_div">
                <p>会员中心</p>
                <p>
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
            <div class="concent_div">
                <p>商城</p>
                <p>
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
            <div class="concent_div">
                <p>在线听歌免流量</p>
                <p>
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
            <div class="concent_div">
                <p>设置</p>
                <p>
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
            <div class="concent_div">
                <p>扫一扫</p>
                <p>
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
            <div class="concent_div">
                <p>个性换肤</p>
                <p>
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios";

    let IP = "http://172.20.10.5:6868";
    export default {
        data() {
            return {
                name: '',
                imageUrl: ''
            }
        },
        methods: {
            loginClick() {
                this.$router.push('/login')
            },
            header_Img_Click() {
                console.log(0)
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        },
        created: function () {
            axios.post(IP + '/logintext', {}).then(function (data) {
                console.log(data)
                this.name = data.data
            }.bind(this))
        }
    }
</script>
<style scoped>
    header {
        background: rgba(224, 46, 46, 0.836);
        text-align: center;
        padding: 1rem;
    }

    .header_div {
        color: white
    }

    .header_section {
        display: flex;
        padding: 1rem;
        border-bottom: 0.1rem solid #ccc
    }

    .header_img {
        border-radius: 50%;
        border: 0.1rem solid;
        width: 4rem;
        height: 4rem;
        margin-right: 1rem;
        text-align: center;
        line-height: 4rem;
    }

    .header_section>div:last-child {
        margin-left: 10rem;
        color: red;
    }

    .info_section {
        display: flex;
        justify-content: space-around
    }

    .concent_div {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        /* border-radius: 6; */
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
    }
</style>