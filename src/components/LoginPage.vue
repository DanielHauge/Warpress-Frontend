<template>
    
  <div class="hello">
    <h1>{{title}}</h1>
    <img src=../assets/wowlogo.png>
    <h1>{{ msg }}</h1>
    <h2>{{ middleMessage }}</h2>
    <form action="https://localhost/bnet/auth">
        <input type="hidden" name="region" value="eu"/>
        <button type="submit" class="btn btn-primary"> {{buttonMessage}} </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "Welcome to Warpress!",
      middleMessage: "Please login with your battle.net account",
      buttonMessage: "Login with Battle.net",
      buttontest: "To Register [TESTING]",
      title: "Wowhub"
    };
  },
  mounted() {
    // Check if authenticated... If user is logged on redirect to main
  },
  methods: {
    navigateTo: function(nav) {
      console.log(nav);
      this.$router.push(nav);
    }
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
