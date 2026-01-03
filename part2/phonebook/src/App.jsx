import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const[newSearch, setNewSearch] = useState('');

  const addName = (event) => {
    event.preventDefault();

    // Check fields
    if (newName.length === 0 || newNumber.length === 0) {
      alert(`Missing name or phone number`)
      return
    }

    // Check if person already in there
    const personToAdd = {name: newName, number: newNumber, id: persons.length + 1}
    if (persons.findIndex(person => person.name.toLowerCase() === personToAdd.name.toLowerCase()) !== -1) {
      alert(`${newName} is already added to phonebook`);
      setNewName(``);
      setNewNumber(``);
      return
    }
    setPersons(persons.concat(personToAdd));
    setNewName(``);
    setNewNumber(``);
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  }

  const searchResult = (search) => {
    if (search.length === 0) {
      return persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)
    }
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    return filteredPersons.map(person => <p key={person.id}>{person.name} {person.number}</p>)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input
          value={newSearch}
          onChange={handleSearchChange}
        />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input
             value={newName}
             onChange={handleNameChange}
          />
        </div>
         <div>
          number: 
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {searchResult(newSearch)}
    </div>
  );
}

export default App