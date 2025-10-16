import React, { useState } from 'react';
import axios from 'axios';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = 'eb99711a345b09348893bd387ad487e4'; 
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather({
        temp: response.data.main.temp,
        humidity: response.data.main.humidity,
        condition: response.data.weather[0].main,
      });
    } catch (error) {
      alert('City not found!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>🌤️ Weather App</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <button onClick={fetchWeather} style={{ marginLeft: '10px', padding: '8px 16px' }}>
        Get Weather
      </button>

      {weather && (
        <div style={{ marginTop: '30px' }}>
          <p><strong>Temperature:</strong> {weather.temp} °C</p>
          <p><strong>Humidity:</strong> {weather.humidity}%</p>
          <p><strong>Condition:</strong> {weather.condition}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
