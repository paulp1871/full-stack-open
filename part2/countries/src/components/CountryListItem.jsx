import { useState } from 'react'
import Country from './Country'

const CountryListItem = ( {country} ) => {
    const [show, setShow] = useState(false)

    const handleShowChange = () => {
        setShow(!show)
    }

    const lat = country?.capitalInfo?.latlng?.[0] || country?.latlng?.[0]
    const long = country?.capitalInfo?.latlng?.[1] || country?.latlng?.[1]

    return (
        <>
            <p key={country.name.official}>
                {country.name.common}
                <button onClick={handleShowChange}>Show</button>
            </p>
            {show ? 
            <Country
                commonName={country.name.common}
                capital={country.capital[0]}
                area={country.area}
                languages={country.languages}
                flagImg={country.flags.svg}
                imgAlt={country.flags.alt} 
                lat={lat}
                long={long}
            /> : 
            null}
        </>
    )
}

export default CountryListItem