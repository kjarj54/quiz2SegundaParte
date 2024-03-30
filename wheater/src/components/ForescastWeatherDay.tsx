import Image from "next/image";
import React from "react";
function ForecastWeatherDay({ day }: { day: ForecastDay }) {
  return (
    <div className="bg-white rounded-xl py-3 ">
      <div
        className="mx-20 flex gap-10 justify-between
items-center overflow-x-scroll"
      >
        <div
          className="flex flex-col items-center
justify-center text-center"
        >
          <img src={day.day.condition.icon ?? ""} />
          <p>{day.date}</p>
          <p className="font-bold">{day.day.avgtemp_c}</p>
          <p className="font-bold">{day.day.condition.text}</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/assets/moon.svg" width={50} height={50} alt="Moon" />
          <p className="flex flex-col">
            <span
              className="font-bold
text-blue-700"
            >
              Moonset
            </span>
            {day.astro.moonset}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/assets/moon.svg" width={50} height={50} alt="Moon" />
          <p className="flex flex-col">
            <span
              className="font-bold
text-blue-700"
            >
              Moonrise
            </span>
            {day.astro.moonrise}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/assets/sun.svg" width={50} height={50} alt="Sun" />
          <p className="flex flex-col">
            <span
              className="font-bold
text-orange-700"
            >
              Sunset
            </span>
            {day.astro.sunset}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/assets/sun.svg" width={50} height={50} alt="Sun" />
          <p className="flex flex-col">
            <span
              className="font-bold
text-orange-700"
            >
              Sunrise
            </span>
            {day.astro.sunrise}
          </p>
        </div>
      </div>
    </div>
  );
}
export default ForecastWeatherDay;
