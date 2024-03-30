import React, { useEffect, useState } from "react";
interface ChildProps {
  weather: WeatherData | null;
  coordinates: GeolocationCoordinates;
  updateWeather: () => Promise<void>;
}
function UpdatedComponent(
  OriginalComponent: React.ComponentType<ChildProps>,
  coordinates: GeolocationCoordinates | null
) {
  const defaultCoordinates: GeolocationCoordinates = {
    latitude: 0,
    longitude: 0,
    altitude: null,
    accuracy: 0,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
  };
  const NewComponent = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    async function getWeather() {
      try {
        if (coordinates === null) return;
        const locationQuery = `?location={"latitude":${coordinates.latitude},"longitude":${coordinates.longitude}}&days=7`;
        const response = await fetch(`/api/forecast/forecast${locationQuery}`);
        if (response.ok) {
          const data = await response.json();
          setWeather(data);
        } else {
          console.error("Error al obtener el pronóstico:", response.statusText);
        }
      } catch (error) {
        console.error("Error al obtener el pronóstico:", error);
      }
    }
    useEffect(() => {
      getWeather();
    }, []);
    const updateWeather = async () => {
      await getWeather();
    };
    return (
      <OriginalComponent
        weather={weather}
        coordinates={defaultCoordinates}
        updateWeather={updateWeather}
      />
    );
  };
  return NewComponent;
}
export default UpdatedComponent;
