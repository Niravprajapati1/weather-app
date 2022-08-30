import React, { useState, useEffect } from "react";
import Weathercard from "./components/Weathercard";
import "./App.css";

const App = () => {
  const [cityname, setCityname] = useState("ahmedabad");
  const [info, setInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
<<<<<<< HEAD
      
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=<enter your api key>`;
=======
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=762206f3d0eb5c5eeca436a2b21d5774`;
>>>>>>> 86a3f42 (project completed)

      let res = await fetch(url);
      let data = await res.json();

      const { temp } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country } = data.sys;

      const WeatherInfo = {
        temp,
        weathermood,
        name,
        speed,
        country,
      };

      setInfo(WeatherInfo);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    getWeatherInfo();
  },[]);

  return (
    <>
    <div class="main">
    <div class="weatherInfo">
      <div class="searchbox">
        <input type="search" class="Search" placeholder= "city name" value={cityname} onChange = {(e) => setCityname(e.target.value.trim().toLowerCase())}>
        </input>
        <button type="submit" class="btn" onClick = {getWeatherInfo}>search</button>
      </div>
      {/* our temp card  */}
      <Weathercard {...info} />
      </div>
      </div>
    </>
  );
};

export default App;
