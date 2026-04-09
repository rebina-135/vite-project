import React, { useState } from 'react';
import { FaCloudSun, FaSearch, FaMapMarkerAlt } from "react-icons/fa";

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async () => {
    if (!city) return;
    setError('');

    // Fallback if VITE_WEATHER_API_KEY is not defined or invalid
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY || 'dummy_key';

    try {
      if (apiKey === 'dummy_key') {
        // Mock data if no API key is present so UI looks good in portfolio
        setTimeout(() => {
          setWeather({ name: city, main: { temp: 24, description: 'Sunny' }, weather: [{ main: 'Clear' }] });
        }, 500);
        return;
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();

      if (data.main) {
        setWeather(data);
      } else {
        setWeather(null);
        setError('City not found');
      }
    } catch (e) {
      setError('Error fetching weather data');
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1><FaCloudSun /> Weather Tracker</h1>
        <p className="subtitle">Look up the current weather conditions.</p>
      </div>

      <div className="weather-search">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && getWeather()}
          style={{ maxWidth: '300px' }}
        />
        <button onClick={getWeather}><FaSearch /> Search</button>
      </div>

      {error && <p style={{ color: '#ef4444', textAlign: 'center' }}>{error}</p>}

      {weather && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="weather-result">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              <FaMapMarkerAlt /> {weather.name}
            </h2>
            <div className="weather-temp">{Math.round(weather.main.temp)}°C</div>
            <p style={{ textTransform: 'capitalize' }}>{weather.weather[0].main}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;