<template>
    <b-card no-body>
        <b-tabs card>
            <b-tab title="Tab 1" active>
                <router-view></router-view>
            </b-tab>
            <b-tab title="Tab 2">
                <router-link to="/guild">
                test
                    <router-view></router-view>
                </router-link>
                
            </b-tab>
        </b-tabs>
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
  data() {
    return {
      title: "Warpress"
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

<style>
</style>
