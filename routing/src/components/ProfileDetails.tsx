import React, { useState, useEffect } from "react";
import ProfileField from "./ProfileField";
import { User } from "@/model/user"
import { getUser } from "@/lib/apiClientConsumer";

function ProfileDetails ({ userID }: { userID: number }) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const userData: User = await getUser(userID);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="md:grid grid-cols-4 grid-rows-2 bg-white gap-2 p-4 rounded-xl w-full max-w-4xl">
        <div className="md:col-span-1">
          <div className="flex w-full h-full relative"></div>
        </div>
        <div className="md:col-span-3 p-4 space-y-2 p-3">
          <ProfileField label="Nombre" value={user?.name} />
          <ProfileField label="Apellidos" value={user?.lastname} />
          <ProfileField label="Privacidad" value={user?.privacy} />
          <ProfileField label="Rol" value={user?.role} />
          <ProfileField label="Género" value={user?.gender} />
          <ProfileField label="Lugar de residencia" value={user?.place_of_residence}/>
          <ProfileField label="Fecha de nacimiento" value={user?.birthdate} />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
