<template>
    <b-card no-body bg-variant="dark" header-text-variant="white">
        <b-tabs pills card nav-class="raidertabs">
            <b-tab title="Rank" v-if="profile.mythic_plus_ranks">
                <b-list-group flush>
                    <b-list-group-item :href="run.url" v-for="(run, index) in profile.mythic_plus_ranks" variant="dark" :key="index" v-if="run.realm != 0">
                        <strong>{{rankName(index)}}:</strong> Realm: {{run.realm}} Region: {{run.region}} World: {{run.world}}
                    </b-list-group-item>
                </b-list-group>
            </b-tab>
            <b-tab title="Highest Runs" v-if="profile.mythic_plus_highest_level_runs">
                <b-list-group flush>
                    <b-list-group-item :href="run.url" v-for="(run, index) in profile.mythic_plus_highest_level_runs" variant="dark" :key="index">
                        {{run.dungeon}} Level: {{run.mythic_level}}
                        <b-badge :class="rankColor(run.score)" variant="primary" pill>
                            {{run.score}} 
                        </b-badge>
                    </b-list-group-item>
                </b-list-group> 
            </b-tab>
            <b-tab title="Recent Runs" v-if="profile.mythic_plus_recent_runs">
                <b-list-group flush>
                    <b-list-group-item :href="run.url" v-for="(run, index) in profile.mythic_plus_recent_runs" variant="dark" :key="index">
                        {{run.dungeon}} Level: {{run.mythic_level}}
                        <b-badge :class="rankColor(run.score)" variant="primary" pill>
                            {{run.score}} 
                        </b-badge>
                    </b-list-group-item>
                </b-list-group>
            </b-tab>
            
        </b-tabs>
        <b-card-footer>
            <a :href="profile.profile_url">Raider.io Profile</a>
        </b-card-footer>  
    </b-card>
</template>

<script>

export default {
    name: "RaiderioCard",
    components: {
        
    },
    props: ['profile'],
    computed: {
        logs: function () {
            let logs = this.best_parses[this.selectedDifficulty].logs
            if(logs){
                let spec = this.specs[this.selectedSpec]
                return logs.filter(function(log) {
                    return log.spec === spec
                }).sort(function(a, b) { return b.percentile - a.percentile})
            }
            
            // .filter((log)=> {
            //     return log.spec === this.specs[selectedSpec]
            // })
        },
        difficulties: function () {
            return this.best_parses.map(group => group.difficulty)
        },
        specs: function () {
            return this.best_parses[this.selectedDifficulty].specs;
        }
    },
    data() {
        return {
            test: "",
            selectedSpec: 0,
            selectedDifficulty: 0,
            difficulty: ["", "", "", "Normal", "Heroic", "Mythic"],
            rankColor: function (percentile) {
                if(percentile >= 95) return "legendary"
                if(percentile >= 75) return "epic"
                if(percentile >= 50) return "rare"
                if(percentile >= 25) return "uncommon"
                else return "common"
            },
            rankName: function (name) {
                if(name == "overall") return "Overall"
                if(name == "dps") return "DPS"
                if(name == "healer") return "Healer"
                if(name == "tank") return "Tank"
                if(name == "class") return "Class"
                if(name == "class_dps") return "Class DPS"
                if(name == "class_healer") return "Class Healer"
                if(name == "class_tank") return "Class Tank"
                else return name
            }
        };
    }    
    };
</script>

<style scoped>
.badge {
    position: relative;
    float: right;
}
.legendary { background-color: rgb(255, 128, 0) !important }
.epic { background-color: rgb(163, 53, 238) !important }
.rare { background-color: rgb(0, 112, 255) !important }
.uncommon { background-color: rgb(30, 255, 0) !important }
.common { background-color: #666 !important }

.card-body {
    padding: 0px;
    
}

.card {
    margin: 5px 5px 5px 5px;
}




.nav-link:first-letter {
    text-transform:capitalize;
}

.nav-tabs {
    border-bottom: 0;
}

.upper {
    margin-bottom: 10px;
}


</style>
