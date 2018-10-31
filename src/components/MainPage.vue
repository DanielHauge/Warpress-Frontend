<template>
    <div class="main">
        <br>
        <h1 class="goldentext">{{character.name}} - {{character.realm}}</h1>
        <b-row >
            <b-col col sm class="left">
                <WarcraftlogsCard :best_parses="best_parses" v-if="best_parses.length > 0"></WarcraftlogsCard>
            </b-col>
            <b-col col sm class="right">
                <ArmoryCard :character="character" :guild="guild" v-if="character.name"></ArmoryCard>
                <TalentsCard :spec="character.spec" v-if="character.spec"></TalentsCard>
            </b-col>
        </b-row>
  </div>
</template>

<script>
import GearIcon from "./GearIcon";
import ArmoryCard from "./ArmoryCard";
import TalentsCard from "./TalentsCard";
import WarcraftlogsCard from "./WarcraftlogsCard";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    components: {
        GearIcon,
        ArmoryCard,
        TalentsCard,
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
        this.getPersonal();
    },
    methods: {
        ...mapMutations('profile', [
            "updateCharacter"
        ]),

        ...mapActions('profile', [
            "getPersonal"    
        ]),

    }
};
</script>

<style scoped>
/* .card-body {
    background-image: "https://render-eu.worldofwarcraft.com/character/" + var(--bg-image)
} */


</style>
