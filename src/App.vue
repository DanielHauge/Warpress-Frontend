<template>
  <div id="app">
      <h1>{{title}}</h1>
      <img src=./assets/wowlogo.png>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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
  color: #ffd700;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}
h1{
  font-weight: bolder;
}
</style>
