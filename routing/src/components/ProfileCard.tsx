import React, { useEffect, useState } from "react";
import ProfileField from "./ProfileField";
import { getUser } from "@/lib/apiClientConsumer";
import { User } from "@/model/user"

function ProfileCard ({ userID }: { userID: number }) {
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
      <div className="md:grid grid-cols-4 grid-rows-2 bg-white gap-2 p-4 rounded-xl">
        <div className="md:col-span-1 h-48 shadow-xl">
          <div className="flex w-full h-full relative"></div>
        </div>
        <div className="md:col-span-3 h-48 shadow-xl p-4 space-y-2 p-3">
          <ProfileField label="Nombre" value={user?.name} />
          <ProfileField label="Apellidos" value={user?.lastname} />
          <ProfileField label="Privacidad" value={user?.privacy} />
          <ProfileField label="Rol" value={user?.role} />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
