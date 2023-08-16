import countryService from "../services/countries";
import Country from "./Country";

const Finder = ({
  countries,
  setCounries,
  searchInput,
  setSearchInput,
  query,
  setQuery,
}) => {
  const filterCountry = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );
  if (searchInput) {
    return (
      <div>
        {filterCountry.map(
          (country) => (
            (
              <Country
                key={country.name.common}
                country={country}
                query={query}
              />
            ),
            setQuery(country)
          )
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Finder;
