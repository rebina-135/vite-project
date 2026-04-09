import React, { useState } from 'react';

function Weather() {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');

  const getWeather = async () => {
    if (!city) return;

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    if (data.main) {
      setTemp(data.main.temp);
    } else {
      setTemp('Not Found');
    }
  };

  return (
    <div className="page">
      <h1>Weather</h1>

      <div className="weather-box">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {temp && <p>Temperature in {city}: {temp}°C</p>}
    </div>
  );
}

export default Weather;