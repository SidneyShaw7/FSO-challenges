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
      id: newName,
      number: newNumber,
    };

    const personExist = people.some((person) => person.id === nameObject.id);
    personExist
      ? alert(`${nameObject.name} is already added to phonebook`)
      : setPeople(people.concat(nameObject));
    setNewNumber("");
    setNewName("");
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
