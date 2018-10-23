<template>
    <div class="main">    
        <b-card overlay
            v-if="main && info" 
            :title="main.name + ' - ' + info.character.realm" 
            :sub-title="info.character.guild.name" 
            border-variant="dark"
            text-variant="white"
            header="" 
            class="bg-light"
            :img-src="'https://render-eu.worldofwarcraft.com/character/'+info.character.thumbnail"
            <p class="card-text">
                Gear:
                <b-container>
                    <b-row>
                        <b-col v-for="(item, slot, i) in info.character.items" v-if="item.icon" :key="item.id">
                            <!-- <p>{{item.name}}</p>
                            <p>{{item.itemLevel}}</p> -->
                            <GearIcon :item="item"></GearIcon>
                        </b-col>
                    </b-row>
                </b-container>
            </p>
            
        </b-card>
  </div>
</template>

<script>
import GearIcon from './GearIcon'
import { APIService } from "../services/api.js";
const apiService = new APIService();

export default {
  components: {
      GearIcon
  },

  data() {
    return {
      description: "Hello:",
      selected: 0,
      main: null,
      info: null
    };
  },
  computed: {
      cssProps() {
          return {
              '--bg-image': (this.info.character.thumbnail)
          }
      }
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
