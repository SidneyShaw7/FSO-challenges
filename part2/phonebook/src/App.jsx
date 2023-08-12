import { useState, useEffect } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import axios from "axios";

function App() {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPeople(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add A New</h3>
      <Form
        people={people}
        newName={newName}
        newNumber={newNumber}
        setPeople={setPeople}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        handleNameChange={(e) => setNewName(e.target.value)}
        handleNumberChange={(e) => setNewNumber(e.target.value)}
      />
      <h3>Numbers</h3>
      <Filter
        people={people}
        searchInput={searchInput}
        setSearchInput={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}

export default App;
