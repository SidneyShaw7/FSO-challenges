import numberService from "../services/Numbers";

const People = ({ setPeople, people, person }) => {
  const handleDelete = (id) => {
    console.log(person.id);
    numberService // force break
      .deletePerson(id)
      .then((formatedPeople) => {
        setPeople(formatedPeople);
        console.log(formatedPeople);
        console.log(person.id);
        console.log(people);
      });
  };
  return (
    <>
      <li key={person.id}>
        {person.name}
        {person.number}{" "}
        <button onClick={() => handleDelete(person.id)}>delete</button>
      </li>
    </>
    // <ul>
    //   {people.map((person) => (
    //     <li key={person.name}>
    //       {person.name} {person.number}{" "}
    //       <button onClick={() => handleDelete(person.id)}>delete</button>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default People;
