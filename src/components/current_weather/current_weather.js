import "./current_weather.css";

const CurrentWeather = ({ currentWeather }) => {
  // const ForecastFetch = fetch(
  //   `${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
  // );

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{currentWeather.city}</p>
          <p className="weather_description">
            {currentWeather.weather[0].description}
          </p>
        </div>

        <img
          src={`icons/${currentWeather.weather[0].icon}.png`}
          alt="weather"
          className="weather_icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature"> {Math.round(currentWeather.main.temp)}°C</p>
        <div className="details">
          <div className="param_row">
            <span className="param_label top">details</span>
          </div>
          <div className="param_row">
            <span className="param_label">feels like</span>
            <span className="param_value">
              {Math.round(currentWeather.main.feels_like)}°C
            </span>
          </div>
          <div className="param_row">
            <span className="param_label">wind</span>
            <span className="param_value">{currentWeather.wind.speed} m/s</span>
          </div>
          <div className="param_row">
            <span className="param_label">humidity</span>
            <span className="param_value">{currentWeather.main.humidity}%</span>
          </div>
          <div className="param_row">
            <span className="param_label">pressure</span>
            <span className="param_value">
              {currentWeather.main.pressure} hpa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
