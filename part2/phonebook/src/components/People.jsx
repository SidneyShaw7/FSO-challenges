const People = ({ filteredPeople }) => {
  return (
    <ul>
      {filteredPeople.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default People;
