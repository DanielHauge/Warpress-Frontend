<template>
    <b-card
            v-if="logs" 
            title="" 
            sub-title="" 
            border-variant="dark"
            bg-variant="dark"
            header-text-variant="white"
            header="Warcraft Logs">
        <b-list-group flush>
            <b-list-group-item v-for="(log, index) in logs" variant="dark" :key="index">
                {{log.encounterName + ' - ' + difficulty[log.difficulty]}}
                <b-badge v-bind:class="rankColor(log.percentile)" variant="primary" pill>
                    {{log.percentile}}
                </b-badge>
            </b-list-group-item>
        </b-list-group>
    </b-card>
</template>

<script>

export default {
  name: "WarcraftlogsCard",
  components: {
      
  },
  props: ['logs'],
  data() {
    return {
      difficulty: ["", "", "", "Normal", "Heroic", "Mythic"],
      rankColor: function (percentile) {
          if(percentile >= 95) return "legendary"
          if(percentile >= 75) return "epic"
          if(percentile >= 50) return "rare"
          if(percentile >= 25) return "uncommon"
          else return "common"
      }
    };
  }
};
</script>

<style scoped>

.legendary { background-color: rgb(255, 128, 0) !important }
.epic { background-color: rgb(163, 53, 238) !important }
.rare { background-color: rgb(0, 112, 255) !important }
.uncommon { background-color: rgb(30, 255, 0) !important }
.common { background-color: #666 !important }

</style>
