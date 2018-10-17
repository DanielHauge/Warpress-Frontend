import axios from 'axios'
 
export class APIService{
    constructor(){}

    getMain() {
        const url = `${process.env.API_URL}/main`
        return axios.get(url, { useCredentials: true })
    }

    setMain(data) {
        const url = `${process.env.API_URL}/main`
        return axios.post(url, data, { useCredentials: true })
    }

    getChars() {
        const url = `${process.env.API_URL}/chars`
        return axios.get(url, { useCredentials: true })
    }

}