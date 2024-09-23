import { useState } from "react";
import "./App.css";
import axios from "axios";
import model from "./model";

interface Props {
  API_KEY: string;
}

const Data: React.FC<Props> = ({ API_KEY }) => {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<model>();
  const [error, setError] = useState<string>("");

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log(response);
      setWeatherData(response.data);
    } catch (err: any) {
      setError("City not found");
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>
      {weatherData && (
        <div className="weather-info">
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>
            Temperature: {weatherData.main.temp}°C Feels Like:{" "}
            {weatherData.main.feels_like}
          </p>
          <p>Humidity: {weatherData.main.humidity}</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Data;
