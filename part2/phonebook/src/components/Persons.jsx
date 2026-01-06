const Persons = ({ search, personsList, removeFunction }) => {
    if (search.length === 0) {
        return personsList.map(person => 
            <p key={person.id}>
                {person.name} {person.number}
                <button onClick={() => removeFunction(person.id)}>delete</button>
            </p> 
        );
    }
    return personsList.reduce((searchResult, person) => {
        if (person.name.toLowerCase().includes(search.toLowerCase())) {
            const match = 
                <p key={person.id}>
                    {person.name} {person.number}
                    <button onClick={() => removeFunction(person.id)}>delete</button>
                </p>;
            searchResult.push(match);
            return searchResult;
        }
        return searchResult;
    }, [])
}

export default Persons