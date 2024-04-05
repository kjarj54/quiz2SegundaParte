const Button = ({ id, color, children, onClick }) => (
  <button
    className={`px-4 py-2 rounded block w-full text-white bg-${color}-500 hover:bg-${color}-600`}
    id={id}
    onClick={onClick}
  >
    {children}
  </button>
);
export default Button;
