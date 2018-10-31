<template>
    <div class="main">
        <div v-if="guild.name">
            <br>
            <h1 class="goldentext">{{guild.name}} - {{guild.realm}}</h1>
            <b-row >
                <b-col col sm class="left">
                    
                </b-col>
                <b-col col sm class="right">
                    <RosterCard :roster="orderedRoster"></RosterCard>
                </b-col>
            </b-row>
        </div>
        <div v-if="!guild.name" class="loading">
            <pulse-loader color="#FFFFFF"></pulse-loader>
        </div>
    </div>
    
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

import GearIcon from "./GearIcon";
import RosterCard from "./RosterCard";
import WarcraftlogsCard from "./WarcraftlogsCard";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    components: {
        GearIcon,
        RosterCard,
        PulseLoader
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
.loading {
    margin-top: 25%;
}
</style>
