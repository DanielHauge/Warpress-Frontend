<template>
    <div class="main" >
        <div v-if="!loadingData">
            <br>
            <h1 class="goldentext">{{character.name}} - {{character.realm}}</h1>
            <b-row >
                <b-col col sm class="left">
                    <WarcraftlogsCard :best_parses="best_parses" v-if="best_parses"></WarcraftlogsCard>
                </b-col>
                <b-col col sm class="right">
                    <ArmoryCard :character="character" v-if="character.name"></ArmoryCard>
                    <TalentsCard :spec="character.spec" v-if="character.spec"></TalentsCard>
                    <StatsCard :stats="character.stats" v-if="character.stats"></StatsCard>
                </b-col>
            </b-row>
        </div>
        <div v-if="loadingData" class="loading">
            <pulse-loader :loading="loadingData" color="#FFFFFF"></pulse-loader>
        </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import ArmoryCard from "./ArmoryCard";
import StatsCard from "./StatsCard";
import TalentsCard from "./TalentsCard";
import WarcraftlogsCard from "./WarcraftlogsCard";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    components: {
        ArmoryCard,
        StatsCard,
        WarcraftlogsCard,
        TalentsCard,
        PulseLoader
    },
    props: ["realm", "name"],

    data() {
        return {};
    },
    computed: {
        ...mapState("inspect", {
            character: state => state.character,
            best_parses: state => state.best_parses,
            loadingData: state => state.loading
        }),
        ...mapState("profile", {
            region: state => state.region
        })
    },
    created() {
        this.getInspect({
            region: this.region,
            realm: this.realm,
            name: this.name
        });
    },
    methods: {
        ...mapMutations("inspect", ["updateCharacter"]),

        ...mapActions("inspect", ["getInspect"])
    }
};
</script>

<style scoped>
/* .card-body {
    background-image: "https://render-eu.worldofwarcraft.com/character/" + var(--bg-image)
} */

.loading {
    margin-top: 25%;
    margin-bottom: 25%;
}
</style>
