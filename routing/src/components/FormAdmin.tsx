import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";
import Checkbox from "./CheckBox";
import { User } from "@/model/user";
import { getUser, deleteUser, postUser } from "@/lib/apiClientConsumer";

function saveUser(user: User | null, formData: FormData | null): void {
  if (user !== null && formData !== null) {
    const newUser = new User(
      user.id,
      formData.get("name") as string,
      formData.get("password") as string,
      formData.get("lastName") as string,
      formData.get("privacy-settings") as string,
      formData.get("rol") as string,
      formData.get("gender") as string,
      formData.get("residence") as string,
      formData.get("birthdate") as string
    )
    console.log("=========================")
    console.log(newUser)
    postUser(newUser)
  }
}

function FormAdmin({ userID }: { userID: number }) {
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
  console.log("=========================")
  console.log(user)
  console.log(user?.role)

  return (
    <div className="flex items-center justify-center pt-4">
      <form className="w-full max-w-lg p-8" ref={formRef}>
        <h1 className="text-2xl font-bold mb-6 text-center">
          Configuración de perfil
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
        <div className="w-full md:w-full px-3">
          <Label htmlFor="residence">Lugar de residencia</Label>
          <Input name="residence" type="text" defaultValue={user ? user.place_of_residence : ""} />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label htmlFor="gender">Género</Label>
            <Select name="gender" options={["Masculino", "Femenino"]} defaultValue={user ? user.gender : ""} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Label htmlFor="privacy-settings">
              Configuración de privacidad
            </Label>
            <Select
              name="privacy-settings"
              options={["Pública", "Solo amigos", "Privado"]}
              defaultValue={user ? user.privacy : "Privado"}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Label htmlFor="birthdate">Fecha de nacimiento</Label>
            <Input name="birthdate" type="date" defaultValue={user ? user.birthdate : ""} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Label htmlFor="password">Contraseña</Label>
            <Input name="password" type="password" defaultValue={user ? user.password : ""} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Label htmlFor="isAdmin">Administrador</Label>
            <Select
              name="rol"
              options={["Usuario", "Administrador"]}
              defaultValue={user ? user.role : "Usuario"}
            />
          </div>
        </div>
        <div className="my-6 w-full text-gray-600">
          <Button id={"Save"} color="blue" onClick={(e: Event) => { saveUser(user, formRef.current ? new FormData(formRef.current) : null) }}>Guardar cambios</Button>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Label htmlFor="account-deletion">Eliminar cuenta</Label>
            <div className="my-6 w-full text-gray-600">
              <Button id="account-deletion" color="blue" onClick={(e: Event) => { deleteUser(userID), e.preventDefault() }}>
                Eliminar
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormAdmin;
