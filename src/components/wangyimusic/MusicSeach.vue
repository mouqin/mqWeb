<template>
    <div>
        <header>
            <div>
                <p>
                    <img src="./bgimg/搜索.png" @click='seach' >
                    <input type="text" v-model='text' placeholder='请输入查询内容'>
                </p>
            </div>
            <div>
                <p @click="noseach">取消</p>
            </div>
        </header>
        <section>
            {{texts}}
            <div v-for="(item,index) in textArr">
                <div class="seach_div">
                    <p>{{index+1}}</p>
                    <p> {{item.name}}</p>
                    <p> {{item.singer}}</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                text: '',
                textArr:[],
            }
        },
        methods: {
            // 点击取消
            noseach() {
                this.$router.push('/music/index')

            },
            seach() {
                this.$store.dispatch({
                    type: "music_seach",
                    text:this.text
                })
            }
        },
        computed: {
            texts(){
                if(this.$store.state.music.seachText==this.text){
                    this.$data.textArr=[]
                }else{
                    this.$data.textArr = this.$store.state.music.seachText
                }
                
            }
        }
    }
</script>
<style scoped>
    header {
        background-color: rgba(226, 50, 6, 0.952);
        display: flex;
        justify-content: space-around
    }

    header>div:first-child {
        width: 65%
    }

    header input {
        width: 100%;
        height: 1.5rem;
        border-radius: 2rem;
        border: 0;
        outline: none;
        padding-left: 2rem;
    }

    img {
        position: absolute
    }
    .seach_div{
        display: flex;
        border-bottom: 0.01rem solid #ccc;
        padding: 0 1rem
    }
    .seach_div >p{
        margin-right: 2rem
    }
</style>