import { getLocation } from "@/lib/geolocation";
import React, { useEffect, useState } from "react";
function withGeolocalization(
  OriginalComponent: React.ComponentType<ChildProps>
) {
  function NewComponent() {
    const defaultCoordinates: GeolocationCoordinates = {
      latitude: 0,
      longitude: 0,
      altitude: null,
      accuracy: 0,
      altitudeAccuracy: null,
      heading: null,
      speed: null,
    };
    const [coordinates, setCoordinates] =
      useState<GeolocationCoordinates | null>(null);
    async function getCoordinates() {
      try {
        const response = await getLocation();
        setCoordinates(response);
      } catch (error) {
        setCoordinates(defaultCoordinates);
      }
    }
    useEffect(() => {
      getCoordinates();
    }, []);
    return <OriginalComponent coordinates={coordinates} />;
  }
  return NewComponent;
}
export default withGeolocalization;
