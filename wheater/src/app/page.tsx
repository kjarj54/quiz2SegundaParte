"use client";
import Weather from "@/components/Weather";
import withGeolocalization from "@/components/WithGeolocalization";
export default function Home() {
  const WeatherWithLocation = withGeolocalization(Weather);
  return (
    <main className=" min-h-screen">
      <WeatherWithLocation />
    </main>
  );
}
