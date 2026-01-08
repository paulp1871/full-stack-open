import axios from 'axios'

const api_key = import.meta.env.VITE_SOME_KEY

export const getAll = (search) => {
    return axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
                .then(response => response.data)
                .then(countriesData => countriesData.filter(country => 
                    country.name.common.toLowerCase().includes(search.toLowerCase())
                ))
}

export const getWeather = (lat, lon) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
                .then(response => response.data)
                .then(({ weather, main, wind }) => { 
                    const weatherInfo = {weather, main, wind}
                    return weatherInfo
                })
                .then()
}
