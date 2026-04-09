import React, { useState } from 'react';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async () => {
    if (!city) {
      setError('Please enter a city name');
      return;
    }

    try {
      setError('');
      const response = await fetch(`https://wttr.in/${city}?format=j1`);
      const data = await response.json();
      setWeather(data.current_condition[0]);
    } catch (err) {
      setError('Unable to fetch weather data');
    }
  };

  return (
    <div className="page">
      <h1>Weather App</h1>

      <div className="weather-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {error && <p className="error-text">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{city}</h2>
          <p><strong>Temperature:</strong> {weather.temp_C}°C</p>
          <p><strong>Humidity:</strong> {weather.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weather.windspeedKmph} km/h</p>
          <p><strong>Condition:</strong> {weather.weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;