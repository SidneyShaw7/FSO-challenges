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
      id: newNumber,
    };

    const personExist = people.some((person) => person.id === nameObject.id);
    personExist
      ? alert(`${nameObject.name} is already added to phonebook`)
      : setPeople(people.concat(nameObject));
    setNewNumber("");
    setNewName("");

    numberServise // force break
      .create(nameObject)
      .then((returnedPerson) => {
        setPeople(people.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
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
