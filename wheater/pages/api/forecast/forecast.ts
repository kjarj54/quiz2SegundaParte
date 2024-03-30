import { NextApiRequest, NextApiResponse } from "next";
import { getForecastWeather } from "./getWeather";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { location, days } = req.query;
      const locationCoordinates = location
        ? JSON.parse(location as string)
        : null;
      const forecast = await getForecastWeather(
        locationCoordinates,
        Number(days)
      );
      res.status(200).json(forecast);
    } catch (error) {
      console.error("Error occurred while fetching forecast:", error);
      res.status(500).json({ error: "Failed to fetch forecast data." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
