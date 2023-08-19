import Finder from "./components/Finder";
import { useState, useEffect } from "react";
import countryService from "./services/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    countryService
      .getAll()
      .then((initialCountries) => {
        setCountries(initialCountries);
        console.log(initialCountries);
      })
      .catch((error) => {
        console.log("error fetching all countries", error);
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
        weather={weather}
        setWeather={setWeather}
      />
    </div>
  );
}

export default App;
