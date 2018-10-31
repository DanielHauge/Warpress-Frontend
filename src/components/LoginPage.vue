<template>
   
  <div class="hello">
    <h1>{{title}}</h1>
    <img src=../assets/wowlogo.png>
    <h1>{{ msg }}</h1>
    <h2>{{ middleMessage }}</h2>
    <button v-on:click="login" class="btn btn-primary"> {{buttonMessage}} </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "Login",
    data() {
        return {
        msg: "Welcome to WoWhub.io!",
        middleMessage: "Please login with your battle.net account",
        buttonMessage: "Login with Battle.net",
        buttontest: "To Register [TESTING]",
        title: "Wowhub",
        api_url: process.env.API_URL
        };
    },
    methods: {
        ...mapActions('profile', [
            'login'
        ])
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  color: #ffd700;
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
