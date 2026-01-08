import { useState, useEffect } from 'react'
import { getAll } from './services/countries'
import DisplayCountries from './components/DisplayCountries'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    if (search.length > 0) {
      getAll(search)
        .then(searchResults => setCountries(searchResults))
    }
  }, [search])

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div>
      <p>
        find countries:
        <input onChange={handleSearchChange}>
        </input>
      </p>
      <DisplayCountries countries={countries} search={search} />
    </div>
  )
}

export default App
