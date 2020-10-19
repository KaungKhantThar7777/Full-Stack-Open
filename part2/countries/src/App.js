import React from "react";
import axios from "axios";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = React.useState([]);
  const [filter, setFilter] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(({ data }) => setCountries(data));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  let countriesToShow;
  if (filteredCountries.length > 10) {
    countriesToShow = "Too many matches, specify another filter";
  } else if (filteredCountries.length === 1) {
    countriesToShow = <CountryDetails country={filteredCountries[0]} />;
  } else {
    countriesToShow = (
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.name}>
            {country.name}{" "}
            <button onClick={() => setFilter(country.name)}>Show</button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div style={{ marginTop: 20 }}>
        find countries{" "}
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      {filter && countriesToShow}
    </>
  );
}

export default App;
