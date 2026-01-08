import Country from './Country'
import CountryListItem from './CountryListItem'

const DisplayCountries = ({ search, countries }) => {
    if (search.length === 0) {
        return null
    }

    if (countries.length > 10) {
        return (<p>Too many matches, specify another filter</p>)
    }
    else if (countries.length > 1) {
        return (countries.map((country) => 
            <CountryListItem country={country}/>
        ))
    }
    else if (countries.length === 0) {
        return null
    }

    const singleCountry = countries[0]
    return (
        <Country
            commonName={singleCountry.name.common}
            capital={singleCountry.capital[0]}
            area={singleCountry.area}
            languages={singleCountry.languages}
            flagImg={singleCountry.flags.svg}
            imgAlt={singleCountry.flags.alt}
            lat={singleCountry.capitalInfo.latlng[0]}
            long={singleCountry.capitalInfo.latlng[1]}
        />
    )
}

export default DisplayCountries