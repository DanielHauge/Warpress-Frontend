<template>
    <b-card no-body bg-variant="dark" text-variant="white">
        <template slot="header">
            Roster
        </template>
        <b-list-group flush v-if="roster.length > 0">
            <b-list-group-item v-for="(character, index) in roster" :href="'#/inspect/'+realm+'/'+character.name" variant="dark" :key="index" :class="classColor(character.class)">
                <!-- <b-img rounded :src="'https://render-eu.worldofwarcraft.com/icons/18/class_'+character.class+'.jpg'" 
                    alt="Image">
                </b-img> -->
                <b-img width="40" height="40" class="class-icon" :src="'https://worldofwarcraft.akamaized.net/static/components/GameIcon/GameIcon-class-'+classColor(character.class)+'-vector.png'" 
                    alt="Image">
                </b-img>
                <strong>{{character.name}}</strong> <small>Role: {{character.role}} Rank: {{character.rank}}</small>
            </b-list-group-item>
        </b-list-group>
        
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
        
    name: "RosterCard",
    components: {
        
    },
    props: ['roster'],
    computed: {
        ...mapState('profile', {
        realm: state => state.guild.slugged_realm
        }),
        
    },
    data() {
        return {
            classColor: function (classCode) {
                if(classCode == 1) return "warrior"
                if(classCode == 2) return "paladin"
                if(classCode == 3) return "hunter"
                if(classCode == 4) return "rogue"
                if(classCode == 5) return "priest"
                if(classCode == 6) return "death-knight"
                if(classCode == 7) return "shaman"
                if(classCode == 8) return "mage"
                if(classCode == 9) return "warlock"
                if(classCode == 10) return "monk"
                if(classCode == 11) return "druid"
                if(classCode == 12) return "demon-hunter"
                else return "common"
            }
        };
    },
};
</script>

<style scoped>
.class-icon { 
    float: left;
    background-color: #495057;
    padding: 2px;
    border: 0;
    margin-right: 10px;
    box-shadow: 0 0 10px #666;
    border-radius: 10px;
}
/* .list-group-item {
    background-color: #495057 
    
}
.list-group-item:hover { 
    background-color: rgb(73, 80, 87, 0.8) 
} */

.legendary { background-color: rgb(255, 128, 0) !important }
.epic { background-color: rgb(163, 53, 238) !important }
.rare { background-color: rgb(0, 112, 255) !important }
.uncommon { background-color: rgb(30, 255, 0) !important }
.common { background-color: #666 !important }

/* .death-knight { background-color: #C41F3B }
.demon-hunter { background-color: #A330C9 }
.druid { background-color: #FF7D0A }
.hunter { background-color: #ABD473 }
.mage { background-color: #40C7EB }
.monk { background-color: #00FF96 }
.paladin { background-color: #F58CBA }
.priest { background-color: #FFFFFF }
.rogue { background-color: #FFF569 }
.shaman { background-color: #0070DE }
.warlock { background-color: #8787ED }
.warrior { background-color: #C79C6E } */

.death-knight:hover { box-shadow: inset 0px 0 50px rgb(196, 31, 59, 0.8) }
.demon-hunter:hover { box-shadow: inset 0px 0 50px rgb(163, 48, 201, 0.8) }
.druid:hover { box-shadow: inset 0px 0 50px rgb(255, 125, 10, 0.8) }
.hunter:hover { box-shadow: inset 0px 0 50px rgb(171, 212, 115, 0.8) }
.mage:hover { box-shadow: inset 0px 0 50px rgb(64, 199, 235, 0.8) }
.monk:hover { box-shadow: inset 0px 0 50px rgb(0, 255, 150, 0.8) }
.paladin:hover { box-shadow: inset 0px 0 50px rgb(245, 140, 186, 0.8) }
.priest:hover { box-shadow: inset 0px 0 50px rgb(255, 255, 255, 0.8) }
.rogue:hover { box-shadow: inset 0px 0 50px rgb(255, 245, 105, 0.8) }
.shaman:hover { box-shadow: inset 0px 0 50px rgb(0, 112, 222, 0.8) }
.warlock:hover { box-shadow: inset 0px 0 50px rgb(135, 135, 237, 0.8) }
.warrior:hover { box-shadow: inset 0px 0 50px rgb(199, 156	, 110, 0.8) }

.card-body {
    padding: 0px;
}

.list-group {
    /* text-align: left; */
}

.card {
    margin: 2% 2% 2% 2%;
}
</style>
