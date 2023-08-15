import Person from "./Person";
import React from "react";

const Filter = ({ people, setPeople, searchInput, setSearchInput }) => {
  // console.log(typeof people);
  // console.log(people);
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
