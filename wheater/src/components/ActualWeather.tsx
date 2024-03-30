import WeatherByHour from "./WeatherByHour";
function ActualWeather({ weather }: ChildProps) {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <h3 className="text-2xl">{weather?.location.country}</h3>
        <h4 className="text-2xl">{weather?.location.region}</h4>
        <h4 className="text-2xl">{weather?.location.name}</h4>
      </div>
      <h4
        className="mt-3 py-5 text-2xl
font-bold"
      >
        {weather?.current.last_updated}
      </h4>
      {weather?.location && (
        <div className="bg-white my-2 rounded-xl">
          <div className=" mx-5 my-0">
            <div className="flex gap-5 py-6">
              <div
                className="flex flex-col justify-center
items-center px-10 text-center"
              >
                {weather?.current.condition.icon && (
                  <img
                    src={"https:" + weather?.current.condition.icon ?? ""}
                    alt="icon current condition"
                    width={50}
                    height={50}
                  />
                )}
                <h2
                  className="text-3xl
font-bold"
                >
                  {weather?.current.temp_c}
                </h2>
                <p>{weather?.current.condition.text}</p>
              </div>
              <div
                className="flex gap-10 sm:gap-16 overflow-x-auto
w-full justify-between pr-3"
              >
                {weather?.forecast.forecastday["0"].hour.map((hour, index) => (
                  <WeatherByHour key={index} hour={hour} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ActualWeather;
