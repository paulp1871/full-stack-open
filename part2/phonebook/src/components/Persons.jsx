const Persons = ({ search, personsList, removeFunction }) => {
    if (search.length === 0) {
        return personsList.map(person => 
            <p key={person.id}>
                {person.name} {person.number}
                <button onClick={() => removeFunction(person.id, person.name)}>delete</button>
            </p> 
        );
    }
    return personsList.reduce((searchResult, person) => {
        if (person.name.toLowerCase().includes(search.toLowerCase())) {
            searchResult.push(
                <p key={person.id}>
                    {person.name} {person.number}
                    <button onClick={() => removeFunction(person.id, person.name)}>delete</button>
                </p>
            );
            return searchResult;
        }
        return searchResult;
    }, [])
}

export default Persons