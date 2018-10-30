<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#/">WoWhub.io</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#/">Personal</b-nav-item>
      <b-nav-item v-if="guild.name" href="#/guild">Guild</b-nav-item>
      <b-nav-item href="#/register">Register Main</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      

      <b-nav-item-dropdown :text="region" right>
        <b-dropdown-item href="#" v-on:click="changeRegion('EU')">EU</b-dropdown-item>
        <b-dropdown-item href="#" v-on:click="changeRegion('US')">US</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right :text="character.name">
        <!-- Using button-content slot -->
        
        <b-dropdown-item href="#" :v-on:click="logout">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
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
          character: state => state.character,
          guild: state => state.guild
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
