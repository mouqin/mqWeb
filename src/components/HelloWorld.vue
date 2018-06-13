<template>
  <div class="hello">
    <music></music>
  </div>
</template>


<script>
  import Music from "./wangyimusic/Music.vue"; //网易云

  export default {
    name: "HelloWorld",
    // 注册
    components: {
      music: Music
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* h1,
  h2 {
    font-weight: normal;
  }

  button {
    border: 0;
    font-size: 20px;
    background: tomato;
    color: white;
  } */
</style>