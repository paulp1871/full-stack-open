import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const create = (newPerson) => {
    return axios.post(baseURL, newPerson).then(response => response.data)
}

const read = () => {
    return axios.get(baseURL).then(response => response.data)
}

export default {
    create,
    read,
}