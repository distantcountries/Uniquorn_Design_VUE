import axios from 'axios'

export default class NewsletterService {
    constructor() {
        axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
    }

    getAll() {
        return axios.get('newsletters')
    }

    get(index) {
        return axios.get('newsletters/' + index)
    }

    add(newSubscriber) {
        // delete newSubscriber.id;
        return axios.post('newsletters', newSubscriber)
    }
}

export const newsletterService = new NewsletterService()