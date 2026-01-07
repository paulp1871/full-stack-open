import axios from 'axios'

const baseURL = 'https://studies.cs.helsinki.fi/restcountries/'

const getAll = (search) => {
    return axios.get(`${baseURL}api/all`)
                .then(response => response.data)
                .then(countriesData => countriesData.filter(country => 
                    country.name.common.toLowerCase().includes(search.toLowerCase())
                ))
}

export default {
    getAll
}