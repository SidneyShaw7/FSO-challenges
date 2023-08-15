import { useState, useEffect } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import axios from "axios";
import numberService from "./services/Numbers";
import Notification from "./components/Notification";

function App() {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [notification, setNotification] = useState(null);
  const [style, setStyle] = useState(true);
  useEffect(() => {
    numberService //force break
      .getAll()
      .then((initialPeople) => {
        setPeople(initialPeople);
      });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} style={style} />
      <h3>Add A New</h3>
      <Form
        people={people}
        newName={newName}
        newNumber={newNumber}
        setStyle={setStyle}
        setPeople={setPeople}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setNotification={setNotification}
        handleNameChange={(e) => setNewName(e.target.value)}
        handleNumberChange={(e) => setNewNumber(e.target.value)}
      />
      <h3>Numbers</h3>
      <Filter
        people={people}
        setStyle={setStyle}
        setNotification={setNotification}
        setPeople={setPeople}
        searchInput={searchInput}
        setSearchInput={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}

export default App;
