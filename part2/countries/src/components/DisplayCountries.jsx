import Country from './Country'

const DisplayCountries = ({ search, countries }) => {
    if (search.length === 0) {
        return null
    }

    if (countries.length > 10) {
        return (<p>Too many matches, specify another filter</p>)
    }
    else if (countries.length > 1) {
        return (countries.map(country => 
        <p key={country.name.official}>
            {country.name.common}
        </p>))
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
        />
    )
}

export default DisplayCountries