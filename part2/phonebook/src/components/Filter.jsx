import People from "./People";

const Filter = ({ people, searchInput, setSearchInput }) => {
  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <>
      filter shown with{" "}
      <input type="search" onChange={setSearchInput} />
      <People filteredPeople={filteredPeople} />
    </>
  );
};

export default Filter;
