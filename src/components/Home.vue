<template>
  <h1>Hej :D {{id}}</h1>
</template>

<script>
export default {
  name: "Home",
  props: {
    id: {
      type: String,
      default: "NO_ID"
    }
  },
  data() {
    return {
      msg: "hej",
      info: null
    };
  },
  mounted() {
    this.axios
      .get("")
      .then(response => (this.info = response))
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
</style>
