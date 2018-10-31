<template>
    <div class="main" v-if="guild.name">
        <br>
        <h1 class="goldentext">{{guild.name}} - {{guild.realm}}</h1>
        <b-row >
            <b-col col sm class="left">
                <RosterCard :roster="orderedRoster"></RosterCard>
            </b-col>
            <b-col col sm class="right">

            </b-col>
        </b-row>
  </div>
</template>

<script>
import GearIcon from "./GearIcon";
import RosterCard from "./RosterCard";
import WarcraftlogsCard from "./WarcraftlogsCard";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  components: {
    GearIcon,
    RosterCard,
  },

  data() {
    return {
    };
  },
  computed: {
    ...mapState('profile', {
      character: state => state.character,
      best_parses: state => state.best_parses,
      guild: state => state.guild,
      region: state => state.region
    }),
    orderedRoster: function () {
        let roster = this.guild.roster.slice()
        return roster.sort((memberA, memberB) => { return memberA.rank - memberB.rank })
    }
  },
  created() {
    this.getGuild();
  },
  methods: {
    ...mapMutations('profile', [
        "updateCharacter"
    ]),

    ...mapActions('profile', [
        "getPersonal",
        "getGuild"
    ]),
  }
};
</script>

<style scoped>

</style>
