import router from '../../router'
import { APIService } from '../../services/api'
const apiService = new APIService();

const state = {
    loading: true,
    character: {},
    best_parses: {},
    raider_io_profile: {},
    guild: {},
    region: 'EU'
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
    getInspect ({ commit }, char){
        commit('startLoading')
        apiService.getInspect(char.region, char.realm, char.name)
        	.then(response => {
        		let char = response.data.character;
                //let guild = response.data.guild;
                let best_parses = response.data.best_parses;
                let raider_io_profile = response.data.raider_io_profile;

                // char.specializations = best_parses.map(log => log.spec).filter(function(spec, index, array) {
                //     return array.indexOf(spec) === index
                // })
        		commit('updateCharacter', char)
                commit('updateLogs', best_parses)
                commit('updateMythicPlus', raider_io_profile)
        		commit('finishLoading')
                //commit('updateGuild', guild)
                
        	})
        	.catch(error => {
        		console.log(error)
                //router.push("login");
        	});
    }
}

const mutations = {
    updateCharacter (state, character){
        state.character = character
    },

    updateLogs (state, logs){
        state.best_parses = logs
    },
    updateMythicPlus (state, profile){
        state.raider_io_profile = profile
    },

    updateGuild (state, guild){
        state.guild = guild
    },

    changeRegion (state, region){
        state.region = region
    },

    startLoading (state){
        state.loading = true
    },

    finishLoading (state){
        state.loading = false
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}