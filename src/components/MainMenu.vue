<template>
    <b-card no-body class="main-menu" bg-variant="dark">
        <template slot="header">
            <b-nav pills>
                <b-nav-item to="/" exact>Personal</b-nav-item>
                <b-nav-item to="/guild" exact>Guild</b-nav-item>
                <b-nav-item to="/register">Settings</b-nav-item>
                <b-nav-form @submit="inspect">
                    <b-form-select v-model="selectedSearchRealm" text="Realm " variant="outline-success">
                        <template slot="first">
                            <!-- this slot appears above the options from 'options' prop -->
                            <option :value="null" disabled>Realm</option>
                        </template>
                        <option value="the-maelstrom">The Maelstrom</option>
                        <option value="thunderhorn">Thunderhorn</option>
                        <option value="twisting-nether">Twisting Nether</option>
                        <option value="azjol-nerub">Azjol-Nerub</option>
                    </b-form-select>
                    <b-form-input class="mr-sm-2" type="text" v-model="searchCharName" placeholder="Character Name"></b-form-input>
                    <b-button type="submit" variant="outline-success" class="my-2 my-sm-0">Search</b-button>
                </b-nav-form>

            </b-nav>
        </template>
        <img src=../assets/wowlogo.png class="menu-logo">
        <template slot="header">
            <b-nav pills class="justify-content-end">
                <b-nav-item v-if="character.name" :to="'/inspect/'+character.slugged_realm+'/'+character.name">{{character.name}}</b-nav-item>
                <b-nav-item v-if="character.name" v-on:click="logout">Logout</b-nav-item>
                <b-nav-item v-if="!character.name" v-on:click="login">Login</b-nav-item>
            </b-nav>
        </template>
        <router-view class="view" :key="$route.fullPath"/>
        <b-card-footer footer-text-variant="white">
            <small>Powered by: 
                <a href="https://www.warcraftlogs.com">Warcraft Logs</a>, 
                <a href="https://raider.io">Raider.IO</a>, 
                <a href="https://www.wowprogress.com">WoWProgress</a>, 
                <a href="https://wowanalyzer.com">WoWAnalyser</a>,
                <a href="https://www.raidbots.com">Raidbots</a> and
                <a href="https://www.blizzard.com">Blizzard</a>
            </small>
        </b-card-footer>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import router from '../router'

export default {
    name: "MainMenu",
    components: {
    },
    data() {
        return {
        title: "Warpress",
        selectedSearchRealm: null,
        searchCharName: null
        };
    },
    computed: {
        ...mapState('profile', {
            region: state => state.region,
            character: state => state.character
        }),
        ...mapGetters('profile', {
            realmSlug: 'realmSlug'
        })
    },
    methods: {
        ...mapMutations('profile', [
            'changeRegion'
        ]),
        ...mapActions('profile', [
            'logout',
            'login'
        ]),
        inspect: function () {
            if(this.selectedSearchRealm && this.searchCharName){
                router.push({ path: `/inspect/${this.selectedSearchRealm}/${this.searchCharName}` })
            }
            
        }
    }

};
</script>

<style scoped>

.main-menu {
    margin-bottom: 50px;
    margin-left: 5%;
    margin-right: 5%;
    background-color: rgb(73,80,87,0.7) !important;
}

.card-body {
    padding: 0px;
    flex: 0;
}

.nav-pills {
    width: 50%;
}

.card-header {
    display: flex;
}


.menu-logo {
    position: absolute;
    height: 100px;
    width: 100px;
    left: 50%; 
    transform: translate(-50%,-20%); 
    z-index: 1
    
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

.nav-tabs {
    border-bottom: 0;
}

.left {
    position: absolute; 
    right: 60%; 
}
</style>

