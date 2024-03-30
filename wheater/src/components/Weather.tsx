"use client";
import ActualWeather from "./ActualWeather";
import ForecastWeather from "./ForecastWeather";
import UpdatedComponent from "./UpdatedComponent";
function Weather({ coordinates }: ChildProps) {
  const WrappedForecastWeather = UpdatedComponent(ForecastWeather, coordinates);
  const WrappedActualWeather = UpdatedComponent(ActualWeather, coordinates);
  return (
    <>
      <WrappedActualWeather />
      <WrappedForecastWeather />
    </>
  );
}
export default Weather;
