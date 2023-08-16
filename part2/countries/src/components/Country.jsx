const Country = ({ country, query }) => {
  if ((query.length = 1)) {
    return (
      <div>
        <h3>{country.name.common}</h3>
        <h4>langueges:</h4>
        <ul>
          <li>{country.langueges}</li>
        </ul>
      </div>
    );
  } else if (query.length <= 10) {
    return (
      <div>
        <h3>{country.name.common}</h3>
      </div>
    );
  } else {
    return <div>Too many matches, sspecify another filter</div>;
  }
};

export default Country;
