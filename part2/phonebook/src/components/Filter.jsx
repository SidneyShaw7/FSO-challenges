import People from "./People";

const Filter = ({ people, setPeople, searchInput, setSearchInput }) => {
  console.log(typeof people);
  console.log(people);
  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <>
      filter shown with <input type="search" onChange={setSearchInput} />
      {filteredPeople.map((person) => (
        <People
          key={person.id}
          setPeople={setPeople}
          people={people}
          person={person}
        />
      ))}
    </>
  );
};

export default Filter;
