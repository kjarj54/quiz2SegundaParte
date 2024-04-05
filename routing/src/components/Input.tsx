const Input = ({ name, type, defaultValue}) => (
  <input
    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    name={name}
    type={type}
    defaultValue={defaultValue}
  />
);
export default Input;
