<template>
    
  <div class="hello">
    <br>
    <h1 class="goldentext">Register Your Guild!</h1>
    <button type="submit" class="btn btn-primary" v-on:click="post"> Register Guild </button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "RegisterGuild",
    data() {
        return {
        data: { "officerrank": 1, "raiderrank": 2, "trialrank":3 },
        
        };
    },
    mounted() {
        // Check if authenticated... If user is logged on redirect to main
    },
    methods: {
        ...mapActions('profile', [
            "registerGuild"    
        ]),

        post: function() {
            console.log("hy")
            this.registerGuild(this.data)
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
