<template>
    <b-card no-body class="main-menu" bg-variant="dark">
        <template slot="header">
            <b-nav pills>
                <b-nav-item to="/" exact>Personal</b-nav-item>
                <b-nav-item to="/guild" exact>Guild</b-nav-item>
                <b-nav-item to="/register">Settings</b-nav-item>
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
        <router-view class="main" :key="$route.fullPath"/>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
    name: "MainMenu",
    components: {
    },
    data() {
        return {
        title: "Warpress",
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
        ])
    }

};
</script>

<style scoped>

.main-menu {
    margin-top: 50px;
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
</style>

