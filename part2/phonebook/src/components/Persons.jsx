const Persons = ({ search, personsList }) => {
    if (search.length === 0) {
        return personsList.map(person => <p key={person.id}>{person.name} {person.number}</p>);
    }
    return personsList.reduce((searchResult, person) => {
        if (person.name.toLowerCase().includes(search.toLowerCase())) {
            const match = <p key={person.id}>{person.name} {person.number}</p>;
            searchResult.push(match);
            return searchResult;
        }
        return searchResult;
    }, [])
}

export default Persons