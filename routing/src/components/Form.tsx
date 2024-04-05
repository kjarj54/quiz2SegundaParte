import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";
import { User } from "@/model/user"
import { getUser, postUser } from "@/lib/apiClientConsumer";

function saveUser(user: User | null, formData: FormData | null): void {
  if (user !== null && formData !== null) {
    const newUser = new User(
      user.id,
      formData.get("name") as string,
      user.password,
      formData.get("lastName") as string,
      user.privacy,
      user.role,
      formData.get("gender") as string,
      formData.get("residence") as string,
      formData.get("birthday") as string
    )
    postUser(newUser)
  }
}

function Form({ userID }: { userID: number }) {
  const [user, setUser] = useState<User | null>(null);
  const formRef = useRef(null)
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
    <div className="flex items-center justify-center pt-4">
      <form className="w-full max-w-lg p-8" ref={formRef}>
        <h1 className="text-2xl font-bold mb-6 text-center">
          Edición de perfil
        </h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label htmlFor="name">Nombre</Label>
            <Input name="name" type="text" defaultValue={user ? user.name : ""} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Label htmlFor="lastName">Apellidos</Label>
            <Input name="lastName" type="text" defaultValue={user ? user.lastname : ""} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <Label htmlFor="residence">Lugar de residencia</Label>
          <Input name="residence" type="text" defaultValue={user ? user.place_of_residence : ""} />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <Label htmlFor="gender">Género</Label>
          <Select name="gender" options={["Masculino", "Femenino"]} defaultValue={user ? user.gender : "Masculino"} />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <Label htmlFor="birthday">Fecha de nacimiento</Label>
          <Input name="birthday" type="date" defaultValue={user ? user.birthdate : ""} />
        </div>
        <div className="my-6 w-full text-gray-600">
          <Button id="submit-changes" color="blue" onClick={(e: any) => {
             saveUser(user, formRef.current ? new FormData(formRef.current) : null),
             e.preventDefault()
             }}>Guardar cambios</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
