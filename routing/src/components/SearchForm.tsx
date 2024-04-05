import React from "react";

const SearchForm = () => {
  return (
    <div className="flex items-center justify-center pt-4">
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Usuario"
            aria-label="Search term"
          />
          <button
            className="flex-shrink-0 transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-white bg-blue-500 hover:bg-blue-700 px-4 py-2"
            type="button"
          >
            Buscar
          </button>
          <button
            className="flex-shrink-0 border-transparent border-4 text-sm py-1 px-2 rounded"
            type="button"
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
