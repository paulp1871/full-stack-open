import { useState, useEffect } from 'react'
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

    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
    if (existingPerson !== undefined) {
      if (window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        updatePerson(existingPerson, newNumber);
      }
      setNewName(``);
      setNewNumber(``);
      return;
    }

    const personToAdd = {name: newName, number: newNumber}
    phonebookServices.add(personToAdd)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName(``);
        setNewNumber(``);
      });
  }

  const removePerson = (personID, personName) => {
    if (window.confirm(`Delete ${personName} ?`)) {
      phonebookServices.remove(personID)
      .then(setPersons(persons.filter(person => person.id !== personID)))
    }
  }

  const updatePerson = (person, updatedNumber) => {
    const {id: personID} = person;
    const updatedPerson = {...person, number: updatedNumber};
    phonebookServices.update(personID, updatedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
      });
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