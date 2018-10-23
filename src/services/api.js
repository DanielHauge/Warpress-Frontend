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
    
    logout() {
		const url = `https://www.blizzard.com/logout`
		return axios.get(url, {
			withCredentials: true
		})
	}
}
