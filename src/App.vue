<template>
  <div id="app">
    <MainMenu></MainMenu>
    <router-view class="main" :key="$route.fullPath"/>
  </div>
</template>

<script>
import MainMenu from "./components/MainMenu.vue";

export default {
  name: 'App',
  components: {
    MainMenu
  },
  data () {
    return {
      title: 'Warpress'
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
}
.main {
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
}
h1{
  font-weight: bolder;
}
</style>
