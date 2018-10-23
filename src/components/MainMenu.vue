<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#/">WoWhub.io</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#/">Personal</b-nav-item>
      <b-nav-item href="#/guild">Guild</b-nav-item>
      <b-nav-item href="#/register">Register Main</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      

      <b-nav-item-dropdown text="Region" right>
        <b-dropdown-item href="#">EU</b-dropdown-item>
        <b-dropdown-item href="#">US</b-dropdown-item>
        <b-dropdown-item href="#">?</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right text="User">
        <!-- Using button-content slot -->
        
        <b-dropdown-item href="#" :v-on:click="logout">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
import { APIService } from "../services/api.js";
const apiService = new APIService();

export default {
  name: "App",
  data() {
    return {
      title: "Warpress"
    };
  },
  methods: {
      logout: apiService.logout
  }

};
</script>

<style>
</style>
