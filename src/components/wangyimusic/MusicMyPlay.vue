<template>
    <div>
        <header>
            <div>
                <p>更多</p>
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
            <div>
                <p>本地音乐</p>
                <p>
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
            <div @click='recent_Play'>
                <p>最近播放</p>
                <p>
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
            <div>
                <p>我的电台</p>
                <p>
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
            <div>
                <p>我的收藏</p>
                <p>
                    <i class="el-icon-arrow-right"></i>
                </p>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        methods: {
            recent_Play(){
                // console.log(1)
                this.$router.push('/music/recent')
            }
        }
    };
</script>
<style scoped>
    header {
        display: flex;
        justify-content: space-around;
        background-color: rgb(218, 12, 12);
    }

    section>div {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
    }
</style>