<template>
    <b-card
        v-if="orderedTalents" 
        border-variant="dark"
        text-variant="white"
        bg-variant="dark"
        header="Talents">
        <p class="card-text">
            <TalentIcon v-for="talent in orderedTalents" :talent="talent" :key="talent.tier"></TalentIcon>
        </p>
    </b-card>
</template>

<script>
import TalentIcon from './TalentIcon'

export default {
    name: "TalentsCard",
    components: {
        TalentIcon
    },
    props: ['spec'],
    data() {
        return {
        
        };
    },
    computed: {
        orderedTalents: function () {
            let talents = this.spec.talents.slice()
            return talents.sort((a, b) => { return a.tier - b.tier} )
        }
    }
};
</script>

<style scoped>


.card {
    width: 100%;
    max-width: 400px;
    min-width: 300px;
    float: right;
    margin: 2% 2% 2% 2%;
}

.card-body {
    padding: 0px;
}

.col {
    padding-left: 0px;
    padding-right: 0px;
}

.card-img {
    width: 100%;
    height: 550px;
    object-fit: cover;
}

.left {
    text-align: left;
}
.right {
    text-align: right;
}
</style>
