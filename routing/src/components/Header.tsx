import React from "react";

const Navbar = () => {
  return (
    <nav className="px-4 py-1 h-auto mb-4 w3-full flex md:flex-wrap flex-col md:flex-row items-center bg-gray-50">
      <div className="flex flex-wrap flex-grow items-center">
        <img
          className="h-12 w-12 rounded-full bg-blue-200"
          alt="Use any sample image here..."
          src="https://embed.pagesection.com/0-_tailwind-navbars-1-0/images/sample-image-256px.png"
        />
        <span className="font-semibold text-xl m-2">
          <span
            style={{
              fontSize: "1.25rem",
              backgroundColor: "rgba(249,250,251,var(--tw-bg-opacity))",
              fontFamily: "inherit",
            }}
          >
            Gestión de usuarios{" "}
          </span>
        </span>
      </div>
      <div className="flex flex-wrap h-full items-center">
        <a className="p-4" href="#">
          Perfil
        </a>
        <a className="p-4" href="#">
          Detalles
        </a>
        <a className="p-4" href="#">
          Edición
        </a>
        <a className="p-4" href="#">
          Configuración
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
