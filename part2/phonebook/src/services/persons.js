import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const add = (newPerson) => axios.post(baseURL, newPerson).then(response => response.data);

const readAll = () => axios.get(baseURL).then(response => response.data);

const update = (personID, person) => axios.put(`${baseURL}/${personID}`, person).then(response => response.data);

const remove = (personID) => axios.delete(`${baseURL}/${personID}`);

export default {
    add,
    readAll,
    update,
    remove
}