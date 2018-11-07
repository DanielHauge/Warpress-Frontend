<template>
    <div class="main">
        <br>
        <h1 class="goldentext">{{character.name}} - {{character.realm}}</h1>
        <b-row >
            <b-col col sm class="left">
                <WarcraftlogsCard :best_parses="best_parses" v-if="best_parses"></WarcraftlogsCard>
                <RaiderioCard :profile="raider_io_profile" v-if="raider_io_profile"></RaiderioCard>
            </b-col>
            <b-col col sm class="right">
                <ArmoryCard :character="character" :guild="guild" v-if="character.name"></ArmoryCard>
                <TalentsCard :spec="character.spec" v-if="character.spec"></TalentsCard>
                <StatsCard :stats="character.stats" v-if="character.stats"></StatsCard>
            </b-col>
        </b-row>
  </div>
</template>

<script>
import GearIcon from "./GearIcon";
import ArmoryCard from "./ArmoryCard";
import TalentsCard from "./TalentsCard";
import StatsCard from "./StatsCard";
import WarcraftlogsCard from "./WarcraftlogsCard";
import RaiderioCard from "./RaiderioCard";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    components: {
        GearIcon,
        ArmoryCard,
        StatsCard,
        TalentsCard,
        WarcraftlogsCard,
        RaiderioCard
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
            raider_io_profile: state => state.raider_io_profile,
            guild: state => state.guild,
            region: state => state.region,
            improvements: state => state.improvements
        })
    },
    created() {
        this.getPersonal();
        this.getPersonalImprovements();
    },
    methods: {
        ...mapMutations('profile', [
            "updateCharacter"
        ]),

        ...mapActions('profile', [
            "getPersonal",
            "getPersonalImprovements"
        ]),

    }
};
</script>

<style scoped>
/* .card-body {
    background-image: "https://render-eu.worldofwarcraft.com/character/" + var(--bg-image)
} */


</style>
