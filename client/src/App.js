import React, { useState } from "react";
import { Route } from "react-router";
import "./App.css";
import About from "./Componentes/About/About";
import Cards from "./Componentes/Cards/Cards";
import Nav from "./Componentes/Nav/Nav";

const apiKey = "74e10aab71c1eb7d76331db9a40509cf";

//http://api.openweathermap.org/data/2.5/weather?q=Santiago&appid=74e10aab71c1eb7d76331db9a40509cf

const App = () => {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id != id));
  }
  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((info) => {
        if (info.main !== undefined) {
          const ciudad = {
            min: Math.round(info.main.temp_min),
            max: Math.round(info.main.temp_max),
            img: info.weather[0].icon,
            id: info.id,
            wind: info.wind.speed,
            temp: info.main.temp,
            name: info.name,
            weather: info.weather[0].main,
            clouds: info.clouds.all,
            latitud: info.coord.lat,
            longitud: info.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id == parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch}/>} />
      <Route path="/About" component={ About } />
      <div>
        <Route exact path='/' render = {() => <Cards cities={cities} onClose={onClose}/>}/>
      </div>
    </div>
  );
};

export default App;
