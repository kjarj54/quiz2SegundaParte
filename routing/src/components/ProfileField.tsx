const ProfileField = ({ label, value }) => (
  <div className="flex">
    <span className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
      {label}:
    </span>
    <input
      className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
      type="text"
      value={value}
      readOnly
    />
  </div>
);
export default ProfileField;
