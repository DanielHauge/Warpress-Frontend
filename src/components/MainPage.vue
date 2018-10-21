<template>
    <div class="main">        
        <b-card title="" :sub-title="info.character.guild.name" border-variant="dark" :header="main.name + ' - ' + info.character.realm" class="bg-light">
            <p class="card-text">
                Gear:
                <b-container >
                    <b-row>
                        <b-col v-for="item in info.character.items" v-if="item.icon" :key="item.id">
                            <!-- <p>{{item.name}}</p>
                            <p>{{item.itemLevel}}</p> -->
                            <b-img v-b-popover.hover="item.name + '\n Item Level: ' + item.itemLevel" :title="item.name" :src="'https://wow.zamimg.com/images/wow/icons/large/'+item.icon+'.jpg'" alt="Image"></b-img>
                        </b-col>
                    </b-row>
                </b-container>
            </p>
            
        </b-card>
  </div>
</template>

<script>
import { APIService } from "../services/api.js";
const apiService = new APIService();

export default {
  components: {
    
  },

  data() {
    return {
      description: "Hello:",
      selected: 0,
      main: {},
      info: {}
    };
  },
  mounted() {
    // axios.all([getMain(), getChars()])
    // axios.get(process.env.API_URL + 'chars', { withCredentials: true })
    apiService
      .getMain()
      .then(response => {
        this.main = response.data;
      })
      .catch(error => console.log(error));

    apiService
      .getPersonal()
      .then(response => {
        this.info = response.data;
      })
      .catch(error => console.log(error));
  },
  methods: {}
};
</script>

<style scoped>
</style>
