// InputField.js
const InputField = ({ id, label, type = "text", placeholder, required = false }) => {
    return (
      <div className="">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded- shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
        />
      </div>
    );
  };
  
  export default InputField;
  