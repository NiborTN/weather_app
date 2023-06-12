import "./App.css";
import CurrentWeather from "./components/current_weather/current_weather";
import Search from "./components/search/search ";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import { useState } from "react";

function App() {
  //States
  const [search, setSearch] = useState();
  const [currentWeather, setCurrentWeather] = useState();

  const currentweatherHandler = (search) => {
    const [lat, lon] = search.value.split(" ");

    fetch(
      `${WEATHER_API_URL}weather?units=metric&lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    )
      .then(async (response) => {
        const weatherRes = await response.json();
        setCurrentWeather({ city: search.label, ...weatherRes });
      })
      .catch((e) => console.log(e));
    console.log(currentWeather);

    console.log(currentWeather);
  };

  console.log(search);
  return (
    <div className="container">
      <Search
        search={search}
        setSearch={setSearch}
        currentweatherHandler={currentweatherHandler}
      />
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
    </div>
  );
}

export default App;
