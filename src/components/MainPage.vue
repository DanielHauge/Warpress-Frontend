<template>
    <div class="main">
        <b-row v-if="character.name && best_parses">
            <b-col col sm><ArmoryCard :character="character" :guild="guild"></ArmoryCard></b-col>
            <b-col cols="10" md="auto"></b-col>
            <b-col col sm><WarcraftlogsCard :logs="best_parses"></WarcraftlogsCard></b-col>
        </b-row>
  </div>
</template>

<script>
import GearIcon from "./GearIcon";
import ArmoryCard from "./ArmoryCard";
import WarcraftlogsCard from "./WarcraftlogsCard";
import { mapState, mapMutations, mapActions } from "vuex";
import { APIService } from "../services/api.js";
const apiService = new APIService();

export default {
  components: {
    GearIcon,
    ArmoryCard,
    WarcraftlogsCard
  },

  data() {
    return {
      main: null,
      info: null
    };
  },
  computed: {
    ...mapState('profile', {
      character: state => state.character,
      best_parses: state => state.best_parses,
      guild: state => state.guild,
      region: state => state.region
    })
  },
  created() {
    // axios.all([getMain(), getChars()])
    // axios.get(process.env.API_URL + 'chars', { withCredentials: true })
    // this.getDataFromApi();
    this.getPersonal();
  },
  methods: {
    ...mapMutations('profile', [
        "updateCharacter"
    ]),

    ...mapActions('profile', [
        "getPersonal"    
    ]),

    // getDataFromApi() {
    //   apiService
    //     .getMain()
    //     .then(response => {
    //       this.main = response.data;
    //     })
    //     .catch(error => {
    //       if (error.response.status === 401) {
    //         this.$router.push("login");
    //       }
    //     });

    //   apiService
    //     .getPersonal()
    //     .then(response => {
    //       this.info = response.data;
    //     })
    //     .catch(error => {
    //       if (error.response.status === 401) {
    //         this.$router.push("login");
    //       }
    //     });
    // }
  }
};
</script>

<style scoped>
/* .card-body {
    background-image: "https://render-eu.worldofwarcraft.com/character/" + var(--bg-image)
} */
</style>
