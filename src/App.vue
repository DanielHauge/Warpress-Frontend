<template>
  <div id="app">
    <!-- <OldMainMenu></OldMainMenu> -->
    <MainMenu></MainMenu>
    <UnderConstruction v-if="production"></UnderConstruction>
    <!-- <router-view class="main" :key="$route.fullPath"/> -->
  </div>
</template>

<script>
import MainMenu from "./components/MainMenu.vue";
import OldMainMenu from "./components/OldMainMenu.vue";
import UnderConstruction from "./components/UnderConstruction.vue";

export default {
  name: 'App',
  components: {
    MainMenu, OldMainMenu, UnderConstruction
  },
  data () {
    return {
      title: 'Warpress',
      production: process.env.NODE_ENV === "production"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #ffd700; */
  width: 100%;
  height: 100%;
  padding-top: 50px;
}
.main {
    margin-left: 5%;
    margin-right: 5%;
}
h1{
  font-weight: bolder;
}
</style>
