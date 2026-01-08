import { useState, useEffect } from 'react'
import { getWeather } from '../services/countries'

const Country = (country) => {
    const [weather, setWeather] = useState(null)

    const imgStyle = {
        height: 200,
        width: 300,
        paddingLeft: 0
    }
    
    useEffect(() => {
        if (country.lat && country.long) {
            getWeather(country.lat, country.long)
            .then(weatherInfo => { 
                setWeather({temp: weatherInfo.main.temp - 273.15, 
                        windSpeed: weatherInfo.wind.speed,
                        icon: `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`,
                        alt: weatherInfo.weather[0].description
                })
            })
            .catch(error => console.log(`${error.message}`))
        }
    }, [])
    

    const languagesList = Object.values(country.languages)

    return (
        <div>
            <h1>{country.commonName}</h1>
            <p>Capital: {country.capital} </p>
            <p>Area: {country.area}</p>
            <h2>Languages</h2>
            <ul>
                {languagesList.map(language =>
                    <li key={language}>{language}</li>
                )}
            </ul>
            <img
                src={`${country.flagImg}`}
                alt={country.imgAlt}
                style={imgStyle}
            />
            {!weather ?
                <h2>Weather not available</h2> :
                <>
                    <h2>Weather in {country.capital}</h2>
                    <p>Temperature: {weather.temp.toFixed(2)} Celcius</p>
                    <img 
                        src={weather.icon}
                        alt={weather.alt}
                    />
                    <p>Wind: {weather.windSpeed} m/s</p>
                </>
            }
        </div>
    )
}

export default Country