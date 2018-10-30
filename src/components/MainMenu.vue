<template>
    <b-card no-body class="main-menu" bg-variant="dark">
        <div class="navigation-bar">
            <b-tabs pills card nav-class="">
                <template slot="tabs">
                    <b-tab v-on:click="$router.push('/')" title="Personal" active title-link-class="warcraftlogs-difficulty-tab"></b-tab>
                    <b-tab v-on:click="$router.push('/guild')" title="Guild" title-link-class="warcraftlogs-difficulty-tab"></b-tab>
                    <b-tab v-on:click="$router.push('/register')" title="Settings" title-link-class="warcraftlogs-difficulty-tab"></b-tab>
                </template>
            </b-tabs>
            <img src=../assets/wowlogo.png class="menu-logo">
            <b-tabs pills card nav-class="justify-content-end">
                <template slot="tabs">
                    <b-tab v-on:click="$router.push('/')" title="Personal" active title-link-class="warcraftlogs-difficulty-tab"></b-tab>
                    <b-tab v-on:click="$router.push('/')" :title="character.name" title-link-class="warcraftlogs-difficulty-tab"></b-tab>
                </template>
            </b-tabs>
        </div>
        
        <router-view class="main" :key="$route.fullPath"/>
    </b-card>
    
    <!-- <b-nav pills >
        <b-nav-item href="#/" active>Personal</b-nav-item>
        <b-nav-item href="#/guild">Guild</b-nav-item>
        <b-nav-item href="#/hov">Officer Room</b-nav-item>
    </b-nav> -->
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { APIService } from "../services/api.js";
const apiService = new APIService();

export default {
  name: "MainMenu",
  components: {
  },
  data() {
    return {
      title: "Warpress",
      mainMenu: [{
          name: "Personal",
          route: "/",
          active: true
      },{
          name: "Guild",
          route: "/guild",
          active: false
      }]
    };
  },
  computed: {
      ...mapState('profile', {
          region: state => state.region,
          character: state => state.character
      })
  },
  methods: {
      ...mapMutations('profile', [
          'changeRegion'
      ]),
      logout: apiService.logout
  }

};
</script>

<style scoped>

.main-menu {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 5%;
    margin-right: 5%;
    background-color: rgb(73,80,87,0.7) !important;
}

.card-body {
    padding: 0px;
    flex: 0;
}

.tabs {
    width: 50%;
}

.navigation-bar {
    display: flex;
}


.menu-logo {
    position: absolute;
    height: 100px;
    width: 100px;
    left: 50%; 
    transform: translate(-50%,-20%); 
    z-index: 1
    
}
</style>

