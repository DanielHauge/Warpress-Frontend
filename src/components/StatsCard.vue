<template>
    <b-card
        v-if="stats" 
        border-variant="dark"
        text-variant="white"
        bg-variant="dark"
        header="Stats">
        <p class="card-text">
            <p v-for="stat in stats">{{statName(stat.stat) + ': ' + stat.amount + ' -- statcode:' + stat.stat}}</p>
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
            statName: function (stat) {
                let stats = [
                    "Mana", 
                    "Health", 
                    "2",
                    "Agility", 
                    "Strength", 
                    "Intellect", 
                    "Spirit", 
                    "Stamina",
                    "8",
                    "9",
                    "10",
                    "11",
                    "Defense Skill",
                    "Dodge",
                    "Parry",
                    "Block",
                    "Melee Hit",
                    "Ranged Hit",
                    "Spell Hit",
                    "Melee Crit",
                    "Ranged Crit",
                    "Spell Crit",
                    "Melee Hit Taken",
                    "Ranged Hit Taken",
                    "Spell Hit Taken",
                    "Melee Crit Taken",
                    "Ranged Crit Taken",
                    "Spell Crit Taken",
                    "Melee Haste",
                    "Ranged Haste",
                    "Spell Haste",
                    "Hit",
                    "Crit",
                    "Hit Taken",
                    "Crit Taken",
                    "Resilience",
                    "Haste",
                    "Expertise",
                    "Attack Power",
                    "Ranged Attack Power",
                    "Versatility",
                    "Spell Healing Done",			// deprecated
                    "Spell Damage Done",			// deprecated
                    "Mana Regeneration",
                    "Armor Penetration",
                    "Spell Power",
                    "Health Regen",
                    "Spell Penetration",
                    "Block Value",
                    "Mastery",
                    "Bonus Armor",
                    "Fire Resistance",
                    "Frost Resistance",
                    "Holy Resistance",
                    "Shadow Resistance",
                    "Nature Resistance",
                    "Arcane Resistance",
                    "PVP Power",
                    "Amplify",
                    "Multistrike",
                    "Readiness",
                    "Speed",
                    "Leech",
                    "Avoidence",
                    "Indestructible",
                    "WOD_5",
                    "Cleave",
                    "67",
                    "68",
                    "69",
                    "70",
                    "Strength/Agility/Intellect",
                    "Strength/Agility",
                    "Agility/Intellect",
                    "Strength/Intellect"
                ]
                if(stat == -1) return "Armor"
                else return stats[stat]
            }
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
