import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebookServices from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const[newSearch, setNewSearch] = useState('');

  useEffect(() => {
    phonebookServices.readAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();

    if (newName.length === 0 || newNumber.length === 0) {
      alert(`Missing name or phone number`);
      return;
    }

    const personToAdd = {name: newName, number: newNumber}
    if (persons.some(person => person.name.toLowerCase() === personToAdd.name.toLowerCase())) {
      alert(`${personToAdd.name} is already added to phonebook`);
      setNewName(``);
      setNewNumber(``);
      return;
    }
    phonebookServices.add(personToAdd)
      .then(returnedPerson => setPersons(persons.concat(returnedPerson)));
    setNewName(``);
    setNewNumber(``);
  }

  const removePerson = (personID) => {
    const personToRemove = persons.find(person => person.id === personID);
    window.confirm(`Delete ${personToRemove.name} ?`)

    phonebookServices.remove(personID)
      .then(setPersons(persons.filter(person => person.id !== personID)))
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
      <Persons
        search={newSearch}
        personsList={persons}
        removeFunction={removePerson}
      />
    </div>
  );
}

export default App