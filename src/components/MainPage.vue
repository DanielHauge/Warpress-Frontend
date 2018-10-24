<template>
    <div class="main">    
        
        <b-row v-if="info">
            <b-col col sm><ArmoryCard :character="info.character"></ArmoryCard></b-col>
            <b-col cols="10" md="auto"></b-col>
            <b-col col sm><WarcraftlogsCard :logs="info.warcraft_logs"></WarcraftlogsCard></b-col>
            
        </b-row>
  </div>
</template>

<script>
import GearIcon from './GearIcon'
import ArmoryCard from './ArmoryCard'
import WarcraftlogsCard from './WarcraftlogsCard'
import { APIService } from "../services/api.js";
const apiService = new APIService();

export default {
  components: {
      GearIcon, ArmoryCard, WarcraftlogsCard
  },

  data() {
    return {
      description: "Hello:",
      selected: 0,
      main: null,
      info: null
    };
  },
  created() {
    // axios.all([getMain(), getChars()])
    // axios.get(process.env.API_URL + 'chars', { withCredentials: true })
    this.getDataFromApi()
  },
  methods: {
    getDataFromApi() {
      apiService
        .getMain()
        .then(response => {
          this.main = response.data;
        })
        .catch(error => {
          if (error.response.status === 401) {
            this.$router.push("login");
          }
        });

      apiService
        .getPersonal()
        .then(response => {
          this.info = response.data;
          this.info.character.thumbnail = this.info.character.thumbnail.replace("avatar", "main")
        })
        .catch(error => {
          if (error.response.status === 401) {
            this.$router.push("login");
          }
        });
    }
  }
};
</script>

<style scoped>
/* .card-body {
    background-image: "https://render-eu.worldofwarcraft.com/character/" + var(--bg-image)
} */
</style>
