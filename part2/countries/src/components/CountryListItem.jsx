import { useState } from 'react'
import Country from './Country'

const CountryListItem = ( {country} ) => {
    const [show, setShow] = useState(false)

    const handleShowChange = () => {
        setShow(!show)
    }

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
                lat={country.capitalInfo.latlng[0]}
                long={country.capitalInfo.latlng[1]}
            /> : 
            null}
        </>
    )
}

export default CountryListItem