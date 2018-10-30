<template>
    <div class="main">
        <br>
        <h1 class="goldentext">{{character.name}} - {{character.realm}}</h1>
        <b-row >
            <b-col col sm class="left">
                <WarcraftlogsCard :logs="best_parses" v-if="best_parses.length > 0"></WarcraftlogsCard>
            </b-col>
            <b-col col sm class="right"><ArmoryCard :character="character" v-if="character.name"></ArmoryCard></b-col>
        </b-row>
  </div>
</template>

<script>
import ArmoryCard from "./ArmoryCard";
import WarcraftlogsCard from "./WarcraftlogsCard";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    components: {
        ArmoryCard,
        WarcraftlogsCard
    },
    props: ["realm", "name"],

    data() {
        return {};
    },
    computed: {
        ...mapState("inspect", {
            character: state => state.character,
            best_parses: state => state.best_parses
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
</style>
