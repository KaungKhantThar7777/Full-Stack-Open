import React from "react";

const CountryDetails = ({ country }) => {
  const { name, capital, population, flag, languages } = country;
  return (
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
};

export default CountryDetails;
