const Persons = ({ search, phonebook }) => {
    if (search.length === 0) {
        return phonebook.map(person => <p key={person.id}>{person.name} {person.number}</p>);
    }
    const filteredPhonebook = phonebook.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
    return filteredPhonebook.map(person => <p key={person.id}>{person.name} {person.number}</p>);
}

export default Persons