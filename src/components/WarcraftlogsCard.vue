<template>
    <b-card no-body v-if="best_parses.length > 1" bg-variant="dark">
        <template slot="header">
            <b-nav pills class="upper">
                <b-nav-item v-for="(difficulty, index) in difficulties" :key="index" :active="selectedDifficulty === index" v-on:click="selectedDifficulty = index">{{difficulty}}</b-nav-item>
            </b-nav>
        </template>
        <template slot="header">
            <b-nav pills>
                <b-nav-item v-for="(spec, index) in specs" :key="index" :active="selectedSpec === index" v-on:click="selectedSpec = index">{{spec}}</b-nav-item>
            </b-nav>
        </template>
        <b-list-group flush>
            <b-list-group-item v-for="(log, index) in logs" variant="dark" :key="index">
                {{log.encounterName}} DPS: {{log.total}}
                <b-badge :class="rankColor(log.percentile)" variant="primary" pill>
                    {{log.percentile}}
                </b-badge>
            </b-list-group-item>
        </b-list-group>        
    </b-card>
</template>

<script>

export default {
    name: "WarcraftlogsCard",
    components: {
        
    },
    props: ['best_parses'],
    computed: {
        logs: function () {
            let logs = this.best_parses[this.selectedDifficulty].logs
            if(logs){
                let spec = this.specs[this.selectedSpec]
                return logs.filter(function(log) {
                    return log.spec === spec
                })
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
    margin: 2% 2% 2% 2%;
}


.nav-link {
    color: rgba(255, 255, 255, 0.5) !important;
}
.nav-link:hover {
    color: rgba(255, 255, 255, 1) !important;
    
    border-color: transparent;
}
.nav-link.active {
    color: rgba(255, 255, 255, 1) !important;
    background-color: #495057 !important;
    border-color: transparent;
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
