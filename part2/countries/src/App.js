import React from "react";
import axios from "axios";

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
    const { name, capital, population, flag, languages } = filteredCountries[0];
    countriesToShow = (
      <div>
        <h2>{name}</h2>
        <p>Capital: {capital} </p>
        <p>Population :{population}</p>
        <img src={flag} width={100} height={100} alt={name} />

        <h4>Languages</h4>
        <ul>
          {languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    countriesToShow = (
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.name}>{country.name}</li>
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
      {countriesToShow}
    </>
  );
}

export default App;
