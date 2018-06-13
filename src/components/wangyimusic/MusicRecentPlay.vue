<template>
    <div>
        <header>
            <div>
                <p>
                    <i class="el-icon-arrow-left" @click='banckMyMusic'></i>
                </p>
            </div>
            <div>
                <p>我的音乐</p>
            </div>
            <div>
                <p>
                    <i class="el-icon-more"></i>
                </p>
            </div>
        </header>
        <section>
        </section>
    </div>
</template>
<script>
    export default {
        methods: {
            // 点击返回
            banckMyMusic() {
                this.$router.push('/music/mymusic')
            }
        },
    };
</script>
<style scoped>
    header {
        display: flex;
        justify-content: space-around;
        background-color: rgb(218, 12, 12);
    }
</style>