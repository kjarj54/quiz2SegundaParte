interface SelectProps {
  name: string;
  options: any;
  defaultValue: string
}

const Select: React.FC<SelectProps>= ({ name, options, defaultValue}) => (
  <select
    className="block appearance-none w-full bg-gray-200 border
     border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded
     leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    name={name}
    defaultValue={defaultValue}
  >
    {options.map((option: any, index: any) => (
      <option key={index} value={option} selected={defaultValue === option}>
        {option}
      </option>
    ))}
  </select>
);
export default Select;
