<template>
  <div id="app">
    <router-view/>
    <!-- <Podcast/> -->
    <Chat/>
    <sound/>
  </div>
</template>

<script>
import Chat from './components/Chat.vue';
import Sound from './components/RadioSound.vue'
import Podcast from './components/PodcastSound.vue'
export default {
  components:{
    Chat,
    Sound,
    Podcast
  },
}

</script>
  
<style>
  /*Global stylesheets*/
  @import "./assets/css/argon.css";
  @import "./assets/css/custom.css";
  @import "./assets/css/fontawesome/fontawesome/css/all.min.css";
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
