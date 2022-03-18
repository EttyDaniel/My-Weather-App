import React, {useState} from "react";
import background from "./assets/bg2.jpg";
const api = {
  key: "46df13dde74d33e122fe7da51f2ac3a6",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Type location here..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            {/* <div className="date">{dateBuilder(new Date())}</div> */}
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
        {/* <div>
          <div className="location-box">
            <div className="location">Ottawa, Canada</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              15°c
            </div>
            <div className="weather">Sunny</div>
          </div>
        </div> */}
      </main>
    </div>
  );
}

export default App;
