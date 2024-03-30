import { formatDate } from "@/lib/format";
import React from "react";
function WeatherByHour({ hour }: { hour: Hour }) {
  return (
    <div className="text-center">
      <p>{formatDate(hour.time)}</p>
      <img
        src={hour.condition.icon ?? ""}
        alt="location"
        width={50}
        height={50}
      />
      <p>{hour.temp_c}˚</p>
    </div>
  );
}
export default WeatherByHour;
