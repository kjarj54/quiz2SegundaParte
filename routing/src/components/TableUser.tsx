import React, { useState, useEffect } from "react";
import { User } from "@/model/user";
import { getUsers } from "@/lib/apiClientConsumer";

const Users = () => {
  const [users, setUser] = useState<User | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const userData: User = await getUsers();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Usuarios
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Lista con los usuarios del sistemas, con nombre, apellidos y tipo de
            configuración de privacidad
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:text-white hover:bg-black focus:outline-black"
          >
            Añadir usuario
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-black"
                  >
                    Apellidos
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-black"
                  >
                    Privacidad
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => (
                    <tr key={user.id}>
                      <td className="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-0">
                        {user.id}
                      </td>
                      <td className="px-3 py-3.5 text-left text-sm font-medium text-gray-900">
                        {user.name}
                      </td>
                      <td className="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-0">
                        {user.lastname}
                      </td>
                      <td className="px-3 py-3.5 text-left text-sm font-medium text-gray-900">
                        {user.privacy}
                      </td>
                      <td className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        <td>
                          <button
                            type="button"
                            className="block rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:text-white hover:bg-black focus:outline-black"
                          >
                            <a href={`/users/profile/${user.id}`}>
                              Perfil
                            </a>
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="block rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:text-white hover:bg-black focus:outline-black"
                          >
                            <a href={`/users/details/${user.id}`}>
                              Detalles
                            </a>
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="block rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:text-white hover:bg-black focus:outline-black"
                          >
                            <a href={`/users/config/${user.id}`}>
                              Configurar
                            </a>
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="block rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:text-white hover:bg-black focus:outline-black"
                          >
                            <a href={`/admin/config/${user.id}`}>
                              Admin Configurar
                            </a>
                          </button>
                        </td>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
