<template>
   
    <div class="hello">
        <br>
        <img src=../assets/wowlogo.png>
        <h1>Welcome to wowhub.io!</h1>
        <h2>Please login with your battle.net account</h2>
        <button v-on:click="login" class="btn btn-primary">Login with Battle.net</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "Login",
    data() {
        return {
        
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
