import axios from 'axios'

export class APIService {
	getMain() {
		const url = `${process.env.API_URL}/main`
		return axios.get(url, {
			withCredentials: true
		})
	}

	setMain(data) {
		const url = `${process.env.API_URL}/main`
		return axios.post(url, data, {
			withCredentials: true
		})
	}

	getChars() {
		const url = `${process.env.API_URL}/chars`
		return axios.get(url, {
			withCredentials: true
		})
    }
    
    getPersonal() {
		const url = `${process.env.API_URL}/personal`
		return axios.get(url, {
			withCredentials: true
		})
    }

    getPersonalImprovements() {
		const url = `${process.env.API_URL}/personal/improvements`
		return axios.get(url, {
			withCredentials: true
		})
    }

    getInspect(region, realm, characterName) {
        const url = `${process.env.API_URL}/personal/inspect/${region}/${realm}/${characterName}`
        return axios.get(url, {
            withCredentials: true
        })
    }

    getGuild() {
		const url = `${process.env.API_URL}/guild`
		return axios.get(url, {
			withCredentials: true
		})
    }

    registerGuild(data) {
        const url = `${process.env.API_URL}/guild`
		return axios.post(url, data, {
			withCredentials: true
		})
    }
    
    logout() {
		const url = `https://www.blizzard.com/logout`
		return axios.get(url, {
			withCredentials: true
		})
	}
}
