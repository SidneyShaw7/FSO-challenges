import numberService from "../services/Numbers";

const Person = ({ setPeople, person }) => {
  const handleDelete = (id) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      numberService
        .deletePerson(id)
        .then(() => {
          numberService.getAll().then((updatedPeople) => {
            setPeople(updatedPeople);
          });
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    }
  };
  return (
    <>
      {person.name} {person.number}{" "}
      <button onClick={() => handleDelete(person.id)}>delete</button>
    </>
  );
};

export default Person;
