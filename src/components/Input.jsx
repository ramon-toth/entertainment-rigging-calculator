function Input({
  value,
  onChange,
  placeholder = "",
  label,
  type = "input",
  id,
  name,
  unit,
}) {
  return (
    <div className="flex mb-3">
      <div className="flex flex-col justify-center mr-5 w-24">
        <label className="block text-sm font-medium leading-6 text-gray-900 ">
          {label}
        </label>
      </div>
      <div className="mt-2 w-72">
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-end focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
          placeholder={placeholder}
        />
      </div>
      <div className="w-24 flex flex-col justify-center ml-5">
        <label className="block text-sm font-medium leading-6 text-gray-900 ">
          {unit}
        </label>
      </div>
    </div>
  );
}

export default Input;
