import numberService from "../services/Numbers";

const Person = ({ setPeople, person, setNotification, setStyle }) => {
  const handleDelete = (id) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      numberService
        .deletePerson(id)
        .then(() => {
          numberService // force break
            .getAll()
            .then((updatedPeople) => {
              setPeople(updatedPeople);
              setStyle(true);
              setNotification(`${person.name} deleted`);
              setTimeout(() => {
                setNotification(null);
              }, 2000);
            });
        })
        .catch((error) => {
          setStyle(false);
          setNotification(
            `Information of ${person.name} has already been removed from the server`
          );
          setTimeout(() => {
            setNotification(null);
          }, 2000);
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
