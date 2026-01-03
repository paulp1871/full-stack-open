import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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

  const addPerson = (event) => {
    event.preventDefault();

    // Check fields
    if (newName.length === 0 || newNumber.length === 0) {
      alert(`Missing name or phone number`)
      return
    }

    // Check if person already in there
    const personToAdd = {name: newName, number: newNumber, id: persons.length + 1}
    if (persons.some(person => person.name.toLowerCase() === personToAdd.name.toLowerCase())) {
      alert(`${personToAdd.name} is already added to phonebook`);
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