<template>
    <b-card no-body
            v-if="logs" 
            bg-variant="dark">
        <b-tabs pills card>
            <template slot="tabs">
                <b-tab v-for="(spec, index) in specializations" 
                    :title="spec" active 
                    :v-on:active="selectedSpec == index"
                    title-link-class="warcraftlogs-difficulty-tab" 
                    :key="spec">
                </b-tab>
            </template>
        </b-tabs>
        <b-tabs card pills>
            <b-tab title="Normal" active v-if="normalLogs.length > 0" title-link-class="warcraftlogs-difficulty-tab">
                <b-list-group flush>
                    <b-list-group-item v-for="(log, index) in normalLogs" variant="dark" :key="index">
                        {{log.encounterName}} DPS: {{log.total}}
                        <b-badge v-bind:class="rankColor(log.percentile)" variant="primary" pill>
                            {{log.percentile}}
                        </b-badge>
                    </b-list-group-item>
                </b-list-group>
            </b-tab>
            <b-tab title="Heroic" v-if="heroicLogs.length > 0" title-link-class="warcraftlogs-difficulty-tab">
                <b-list-group flush>
                    <b-list-group-item v-for="(log, index) in heroicLogs" variant="dark" :key="index">
                        {{log.encounterName}} DPS: {{log.total}}
                        <b-badge v-bind:class="rankColor(log.percentile)" variant="primary" pill>
                            {{log.percentile}}
                        </b-badge>
                    </b-list-group-item>
                </b-list-group>
            </b-tab>
            <b-tab title="Mythic" v-if="mythicLogs.length > 0" title-link-class="warcraftlogs-difficulty-tab">
                <b-list-group flush>
                    <b-list-group-item v-for="(log, index) in mythicLogs" variant="dark" :key="index">
                        {{log.encounterName}} DPS: {{log.total}}
                        <b-badge v-bind:class="rankColor(log.percentile)" variant="primary" pill>
                            {{log.percentile}}
                        </b-badge>
                    </b-list-group-item>
                </b-list-group>
            </b-tab>
        </b-tabs>
        
    </b-card>
</template>

<script>

export default {
  name: "WarcraftlogsCard",
  components: {
      
  },
  props: ['logs'],
  computed: {
      normalLogs: function () {
          let specializations = this.specializations
          let selectedSpec = this.selectedSpec
          return this.logs.filter(function(log) {
              return log.difficulty === 3 && log.spec === specializations[selectedSpec]
          })
      },
      heroicLogs: function () {
          let specializations = this.specializations
          let selectedSpec = this.selectedSpec
          return this.logs.filter(function(log) {
              return log.difficulty === 4 && log.spec === specializations[selectedSpec]
          })
      },
      mythicLogs: function () {
          let specializations = this.specializations
          let selectedSpec = this.selectedSpec
          return this.logs.filter(function(log) {
              return log.difficulty === 5 && log.spec === specializations[selectedSpec]
          })
      },
      specializations: function () {
          let specs = this.logs.map(log => log.spec)
          return specs.filter(function(spec, index, array) {
              return array.indexOf(spec) === index
          })
      }
  },
  data() {
    return {
        selectedSpec: 0,
        difficulty: ["", "", "", "Normal", "Heroic", "Mythic"],
        rankColor: function (percentile) {
            if(percentile >= 95) return "legendary"
            if(percentile >= 75) return "epic"
            if(percentile >= 50) return "rare"
            if(percentile >= 25) return "uncommon"
            else return "common"
        }
    };
  },
};
</script>

<style scoped>
.badge {
    position: relative;
    float: right;
}
.legendary { background-color: rgb(255, 128, 0) !important }
.epic { background-color: rgb(163, 53, 238) !important }
.rare { background-color: rgb(0, 112, 255) !important }
.uncommon { background-color: rgb(30, 255, 0) !important }
.common { background-color: #666 !important }

</style>
