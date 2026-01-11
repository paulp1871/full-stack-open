import { useState, useEffect } from 'react'
import { getAll } from './services/countries'
import DisplayCountries from './components/DisplayCountries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchedCountries, setSearchedCountries] = useState([])
  
  useEffect(() => {
    getAll()
      .then(countriesData => {
        setCountries(countriesData) 
      })
      .catch(error => console.log(`${error.message}`))
  }, [])

  const handleSearchChange = (event) => {
    const currSearch = event.target.value
    if (currSearch.length === 0) {
      setSearchedCountries(searchedCountries => [])
    }
    else {
      setSearchedCountries(searchedCountries => countries.filter(country => country.name.common.toLowerCase().includes(currSearch.toLowerCase())));
    }
  }

  return (
    <div>
      <p>
        find countries:
        <input id='country-search-bar' onChange={handleSearchChange}>
        </input>
      </p>
      <DisplayCountries countries={searchedCountries} />
    </div>
  )
}

export default App
