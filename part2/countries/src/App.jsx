import Finder from "./components/Finder";
import { useState, useEffect } from "react";
import countryService from "./services/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState([]);

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
        query={query}
        setQuery={setQuery}
        countries={countries}
        setCountries={setCountries}
        searchInput={searchInput}
      />
      {console.log(searchInput)}
    </div>
  );
}

export default App;
