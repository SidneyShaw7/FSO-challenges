import numberServise from "../services/Numbers";

const Form = ({
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
  setNewName,
  setNewNumber,
  people,
  setPeople,
}) => {
  const addName = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    const personId = people.find((person) => person.name === nameObject.name);

    if (personId) {
      const id = personId.id;
      if (
        window.confirm(
          `${nameObject.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        numberServise //force break
          .update(id, nameObject)
          .then(() => {
            numberServise // force break
              .getAll()
              .then((updatedPeople) => {
                setPeople(updatedPeople);
              });
          });
      }
    } else {
      numberServise // force break
        .create(nameObject)
        .then((returnedPerson) => {
          setPeople(people.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
        });
    }
  };
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
