import axios from 'axios'

export default class MailsService {
    constructor() {
        axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
    }

    getAll() {
        return axios.get('mails')
    }

    get(index) {
        return axios.get('mails/' + index)
    }

    add(newMail) {
        // delete mail.id;
        return axios.post('mails', newMail)
    }
}

export const mailsService = new MailsService()