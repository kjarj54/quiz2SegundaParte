import dotenv from "dotenv";
dotenv.config();
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export async function getForecastWeather(
  location: GeolocationCoordinates | null,
  days: number
) {
  try {
    let apiUrl = "";
    if (!location) {
      apiUrl = `${NEXT_PUBLIC_API_URL}/forecast.json?q=0,0&key=${NEXT_PUBLIC_API_KEY}&
days=${days}`;
    } else {
      const { latitude, longitude } = location;
      apiUrl = `${NEXT_PUBLIC_API_URL}/forecast.json?q=${latitude},${longitude}&key=${NEXT_PUBLIC_API_KEY}&days=${days}`;
    }
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error occurred while fetching weather data:", error);
    throw new Error("Error occurred while fetching weather data.");
  }
}
