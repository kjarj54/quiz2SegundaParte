import dotenv from "dotenv";
dotenv.config();
export const getLocation = async () => {
  if (!navigator.geolocation) {
    throw new Error("Geolocation is not supported in thisenvironment.");
  }
  return new Promise<GeolocationCoordinates>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => reject(error)
    );
  });
};
