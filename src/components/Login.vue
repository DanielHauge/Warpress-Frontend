<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ middleMessage }}</h2>
    <a type="button" class="btn btn-primary" href="https://localhost/bnet/auth"> {{buttonMessage}}</a>
    <button type="button" v-on:click="navigateTo('Register')" class="btn btn-primary"> {{buttontest}}</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Warpress!',
      middleMessage: 'Please login with your battle.net',
      buttonMessage: 'Login with Battle.net',
      buttontest: 'To Register [TESTING]'
    }
  },
  methods: {
    navigateTo: function (nav) {
      console.log(nav)
      this.$router.push(nav)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
