import React from "react";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";

const ChangePassword = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Configuración de la cuenta
      </h1>
      <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
      <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Label htmlFor="lastName">Apellidos</Label>
            <Input id="lastName" type="text" />
          </div>
        </div>
        <div className="mb-4">
          <Label htmlFor="password">Nueva contraseña</Label>
          <Input id="password" type="password" />
        </div>
        <Button color="indigo" id="submit">
          Cambiar contraseña
        </Button>
        <div className="mb-4">
          <Label htmlFor="privacy-settings">Configuración de privacidad</Label>
          <Select
            id="privacy-settings"
            options={["Pública", "Solo amigos", "Privado"]}
          />
        </div>
        <div className="my-6 w-full text-gray-600">
          <Button id="submit-changes"color="blue">Guardar cambios</Button>
        </div>
        <div className="w-full px-3">
          <Label htmlFor="account-deletion">Eliminar cuenta</Label>
          <div className="my-6 w-full text-gray-600">
            <Button id="account-deletion" color="red">
              Eliminar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
