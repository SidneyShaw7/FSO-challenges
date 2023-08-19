import weatherService from "../services/weather";
import { useEffect } from "react";

const Weather = ({ country, weather, setWeather }) => {
  const lat = country.capitalInfo.latlng[0];
  const lon = country.capitalInfo.latlng[1];

  useEffect(() => {
    weatherService.getData(lat, lon).then((weatherData) => {
      setWeather(weatherData);
    });
  }, [lat, lon, setWeather]);

  return weather.main ? (
    <div>
      <h3>Weather in {country.capital}</h3>
      <p>Temperature: {weather.main.temp} Celcius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather image"
      />
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  ) : null;
};

export default Weather;
