<template>
    <b-card
        v-if="stats" 
        border-variant="dark"
        text-variant="white"
        bg-variant="dark"
        header="Stats">
        <p class="card-text">
            <p>Agility: {{stats.agi}}</p>
            <p>Intellect: {{stats.int}}</p>
            <p>Strength: {{stats.str}}</p>
            <p>Armor: {{stats.armor}}</p>
            <p>Crit: {{stats.crit}}%</p>
            <p>Haste: {{stats.haste}}%</p>
            <p>Versatility: {{stats.versatilityDamageDoneBonus}}%</p>
            <p>Mastery: {{stats.mastery}}%</p>
            <p>Stamina: {{stats.sta}}</p>
            <p>Health: {{stats.health}}</p>
            <!-- <p v-for="stat in stats">{{statName(stat.stat) + ': ' + stat.amount + ' -- statcode:' + stat.stat}}</p> -->
        </p>
    </b-card>
</template>

<script>

export default {
    name: "StatsCard",
    components: {
        
    },
    props: ['stats'],
    data() {
        return {
            
        };
    },
    computed: {
        // orderedTalents: function () {
        //     let talents = this.spec.talents.slice()
        //     return talents.sort((a, b) => { return a.tier - b.tier} )
        // }
    }
};
</script>

<style scoped>


.card {
    width: 100%;
    max-width: 400px;
    min-width: 300px;
    float: right;
    margin: 5px 5px 5px 5px;
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
