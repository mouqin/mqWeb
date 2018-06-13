<template>
  <div id="concent">
    {{VIDEO}}
    <div v-for="(item,index) in videoList">
      <video :src="IP+item.url" controls preload class="videoStyle"></video>
      <p class="text">{{item.title}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        IP: "http://172.20.10.5:6868",
        videoList: [],
      };
    },
    created: function () {
      this.$store.dispatch({
        type: "music_video"
      });
    },
    computed: {
      VIDEO() {
        this.$data.videoList = this.$store.state.music.videoArr;
        console.log(this.$data.videoList)
      }
    }
  };
</script>
<style scoped>
  .videoStyle {
    width: 100%;
    height: 20rem;
  }
  .text {
    font-size: 1.5rem;
  }
</style>