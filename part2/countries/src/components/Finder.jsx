import countryService from "../services/countries";
import Country from "./Country";

const Finder = ({ countries, searchInput, setSearchInput }) => {
  const filterCountry = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );

  if (searchInput && filterCountry.length > 10) {
    return (
      <div style={{ marginTop: 10 }}>
        Too many matches, specify another filter
      </div>
    );
  } else if (searchInput && filterCountry.length <= 10) {
    return (
      <div>
        {filterCountry.map((country) => (
          <Country
            key={country.name.common}
            country={country}
            filterCountry={filterCountry}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default Finder;
