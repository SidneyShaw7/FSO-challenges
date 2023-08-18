import Finder from "./components/Finder";
import { useState, useEffect } from "react";
import countryService from "./services/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [showCountry, setShowCountry] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    countryService
      .getAll()
      .then((initialCountries) => {
        setCountries(initialCountries);
        console.log(initialCountries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h2>Welcome to the Countries Little Library!</h2>
      Type country{" "}
      <input
        type="search"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      ></input>
      <Finder
        countries={countries}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </div>
  );
}

export default App;
