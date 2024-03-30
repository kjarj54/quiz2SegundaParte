import React, { useEffect } from "react";
import ForecastWeatherDay from "./ForescastWeatherDay";
function ForecastWeather({ weather }: ChildProps) {
  useEffect(() => {
    console.log("forecast weather");
    console.log(weather);
  }, []);
  return (
    <>
      {weather?.location && (
        <div>
          <h3
            className="mt-3 py-5 text-2xl
font-bold"
          >
            Forecast Weather
          </h3>
          <div className="my-2">
            <div className="flex flex-col gap-5">
              {weather?.forecast.forecastday.map((day, index) => (
                <ForecastWeatherDay key={index} day={day} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ForecastWeather;
