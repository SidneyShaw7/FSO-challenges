import Weather from "./Weather";
const Country = ({
  country,
  filterCountry,
  setSearchInput,
  weather,
  setWeather,
}) => {
  const languages = country.languages;

  if (filterCountry.length === 1) {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>capital: {country.capital}</p>
        <p>area: {country.area}</p>
        <h4>languages:</h4>
        <ul>
          {Object.entries(languages).map(([propertyName, propertyValue]) => (
            <li key={propertyName}>{propertyValue}</li>
          ))}
        </ul>
        <p style={{ fontSize: 100, margin: 0 }}>{country.flag}</p>
        <Weather country={country} weather={weather} setWeather={setWeather} />
      </div>
    );
  } else if (filterCountry.length <= 10) {
    return (
      <>
        <h4>
          {country.name.common}{" "}
          <button onClick={() => setSearchInput(country.name.common)}>
            show
          </button>
        </h4>
      </>
    );
  }
};

export default Country;
