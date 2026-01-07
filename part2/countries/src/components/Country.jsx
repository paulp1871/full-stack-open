const Country = (country) => {
    const imgStyle = {
        height: 200,
        width: 300,
        paddingLeft: 0
    }

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
        </div>
    )
}

export default Country