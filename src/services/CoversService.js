import axios from 'axios'

export default class CoversService {
    constructor() {
        axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
    }

    getAll() {
        return axios.get('covers')
    }

    get(index) {
        return axios.get('covers/' + index)
    }
}

export const coversService = new CoversService()