import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const[newSearch, setNewSearch] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();

    if (newName.length === 0 || newNumber.length === 0) {
      alert(`Missing name or phone number`);
      return;
    }

    const personToAdd = {name: newName, number: newNumber, id: String(persons.length + 1)}
    if (persons.some(person => person.name.toLowerCase() === personToAdd.name.toLowerCase())) {
      alert(`${personToAdd.name} is already added to phonebook`);
      setNewName(``);
      setNewNumber(``);
      return;
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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        value={newSearch}
        onChange={handleSearchChange}
      />
      <h3>add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        numberValue={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons search={newSearch} phonebook={persons}/>
    </div>
  );
}

export default App