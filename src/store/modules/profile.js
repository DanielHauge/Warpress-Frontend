import router from '../../router'
import { APIService } from '../../services/api'
const apiService = new APIService();

const state = {
    character: {},
    best_parses: {},
    improvements: {},
    guild: {},
    region: 'eu'
}

const getters = {
    region: state => {
        return state.region
    },
    character: state => {
        return state.character
    }
}

const actions = {
    getPersonal ({ commit }){
        apiService.getPersonal()
        	.then(response => {
        		let char = response.data.character;
                //let guild = response.data.guild;
                let best_parses = response.data.best_parses;
        		commit('updateCharacter', char)
        		commit('updateLogs', best_parses)
        		//commit('updateGuild', guild)
        	})
        	.catch(error => {
        		
                router.push("login");
        	});
    },
    getPersonalImprovements ({ commit }){
        apiService.getPersonalImprovements()
        	.then(response => {
        		let inprovements = response.data;
        		commit('updateInprovements', inprovements)
        	})
        	.catch(error => {
        		
                router.push("login");
        	});
    },

    getGuild ({ commit }){
        apiService.getGuild()
            .then(response => {
                let guild = response.data;
                commit('updateGuild', guild)
            })
            .catch(error => {
        		
                router.push("registerguild");
        	});
    },

    registerGuild ({ commit }, data){
        apiService.registerGuild(data)
            .then(response => {
                router.push("guild")
            })
            .catch(error => {
                console.log(error)
                //router.push("registerguild");
        	});
    },

    login ({ commit, state }){
        apiService.login(state.region)
    },

    logout ({ commit }){
        apiService.logout()
        .then(response => {
            location.reload()
            commit('logout')
        })
    }
}

const mutations = {
    updateCharacter (state, character){
        state.character = character
    },
    updateImprovements (state, inprovements){
        state.inprovements = inprovements
    },
    updateLogs (state, logs){
        state.best_parses = logs
    },
    updateGuild (state, guild){
        state.guild = guild
    },
    changeRegion (state, region){
        state.region = region
    },
    logout (state){
        state.character = {},
        state.best_parses = {},
        state.improvements = {},
        state.guild = {},
        state.region = 'eu'
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}