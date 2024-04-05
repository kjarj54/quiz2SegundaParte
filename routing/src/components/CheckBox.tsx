import React from "react";

interface CheckboxProps {
  id: string;
  name: string
  label: string;
  defaultChecked: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({ id, name, label, defaultChecked}) => (
  <div className="flex items-center">
    <input id={id} name={name} type="checkbox" className="mr-2" defaultChecked={defaultChecked}/>
    <label htmlFor={id} className="text-sm">
      {label}
    </label>
  </div>
);

export default Checkbox;
