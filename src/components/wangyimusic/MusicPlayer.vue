<template>
  <div id="big_div">
    <header>
      {{ playmusic}}
      <div>
        <p>
          <i class="el-icon-arrow-left" @click="backlist"></i>
        </p>
      </div>
      <div>
        <p>{{play.name}}</p>
        <p>{{play.singer}}</p>
      </div>
      <div>
        <p>
          <i class="el-icon-more"></i>
        </p>
      </div>
    </header>
    <section>
      <div class="img_div">
        <img :src="IP+play.img" class="play_img">
      </div>
    </section>
    <div class="next">
      <p>
        <i class="el-icon-caret-left" @click='nextBTN'></i>
      </p>
      <p>
        <i class="el-icon-caret-right" @click='upBTN'></i>
      </p>
    </div>
    <footer>
      <audio :src="IP+play.url" controls autoplay></audio>
    </footer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        play: [],
        IP: "http://172.20.10.5:6868"
      };
    },
    methods: {
      backlist() {
        this.$router.push("/musiclist");
      },
      nextBTN() {
        console.log(1,);
      },
      upBTN(inxwc) {
        console.log(2,);
      }
    },
    computed: {
      playmusic() {
        console.log(this.$store.state.music)
        this.$data.play = this.$store.state.music.playArr;
      }
    }
  };
</script>
<style scoped>
  /* #big_div {
        background-color: #888888
    } */

  header {
    display: flex;
    justify-content: space-between;
    height: 3rem;
    padding: 0 0.5rem;
  }

  header p {
    text-align: center;
  }

  .img_div {
    width: 15rem;
    margin: 5rem auto;
    border-radius: 50%;
    box-shadow: 1rem 1rem 5rem #888888;
  }

  .play_img {
    width: 15rem;
    border-radius: 50%;
    animation: rotation 12s linear infinite;
    -moz-animation: rotation 12s linear infinite;
    -webkit-animation: rotation 12s linear infinite;
    -o-animation: rotation 12s linear infinite;
  }

  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  .next {
    display: flex;
    justify-content: space-around;
    font-size: 2rem
  }

  footer {
    position: fixed;
    bottom: 1rem;
  }
</style>