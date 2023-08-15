import Person from "./Person";

const Filter = ({ people, setPeople, searchInput, setSearchInput }) => {
  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <>
      filter shown with <input type="search" onChange={setSearchInput} />
      {filteredPeople.map((person) => (
        <li key={person.id}>
          <Person
            key={person.id}
            setPeople={setPeople}
            people={people}
            person={person}
          />
        </li>
      ))}
    </>
  );
};

export default Filter;
