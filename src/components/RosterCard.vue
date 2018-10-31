<template>
    <b-card no-body bg-variant="dark" header-text-variant="white">
        <template slot="header">
            Roster
        </template>
        <b-list-group flush v-if="roster.length > 0">
            <b-list-group-item v-for="(character, index) in roster" :href="'#/inspect/'+realm+'/'+character.name" variant="dark" :key="index" :class="classColor(character.class)">
                <b-img rounded :src="'https://render-eu.worldofwarcraft.com/icons/18/class_'+character.class+'.jpg'" 
                    alt="Image">
                </b-img>
                <strong>{{character.name}}</strong> Role: {{character.role}} Rank: {{character.rank}}
            </b-list-group-item>
            <b-list-group-item :href="'#/inspect/twisting-nether/Raklesh'" variant="dark" :key="421">
                Raklesh Role: Tank
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
.legendary { background-color: rgb(255, 128, 0) !important }
.epic { background-color: rgb(163, 53, 238) !important }
.rare { background-color: rgb(0, 112, 255) !important }
.uncommon { background-color: rgb(30, 255, 0) !important }
.common { background-color: #666 !important }

.death-knight { background-color: #C41F3B }
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
.warrior { background-color: #C79C6E }

.death-knight:hover { background-color: rgb(196, 31, 59, 0.8) }
.demon-hunter:hover { background-color: rgb(163, 48, 201, 0.8) }
.druid:hover { background-color: rgb(255, 125, 10, 0.8) }
.hunter:hover { background-color: rgb(171, 212, 115, 0.8) }
.mage:hover { background-color: rgb(64, 199, 235, 0.8) }
.monk:hover { background-color: rgb(0, 255, 150, 0.8) }
.paladin:hover { background-color: rgb(245, 140, 186, 0.8) }
.priest:hover { background-color: rgb(255, 255, 255, 0.8) }
.rogue:hover { background-color: rgb(255, 245, 105, 0.8) }
.shaman:hover { background-color: rgb(0, 112, 222, 0.8) }
.warlock:hover { background-color: rgb(135, 135, 237, 0.8) }
.warrior:hover { background-color: rgb(199, 156	, 110, 0.8) }

.card-body {
    padding: 0px;
}

.list-group {
    text-align: left;
}

.card {
    margin: 2% 2% 2% 2%;
}
</style>
