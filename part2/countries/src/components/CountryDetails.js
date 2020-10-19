import React from "react";
import axios from "axios";

const CountryDetails = ({ country }) => {
  const { name, capital, population, flag, languages } = country;
  const [weather, setWeather] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${capital}`
      )
      .then(({ data }) => setWeather(data.current))
      .catch((err) => console.log(err));
  }, [capital]);
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
      {weather && (
        <div>
          <h3>Weather in {capital}</h3>
          <p>temperature: {weather.temperature} C</p>
          <img src={weather.weather_icons[0]} alt={capital} />
          <p>
            wind: {weather.wind_speed} mph direction {weather.wind_direction}
          </p>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
