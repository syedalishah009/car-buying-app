import { useState } from "react";
import Dropdown from "../ui/DropDown";
import InputField from "../ui/InputField";

export default function Employment() {
  const options = [
    { value: "option 1", label: "option 1" },
    { value: "option 2", label: "option 2" },
    { value: "option 3", label: "option 3" },
  ];

  const [showAdditionalIncome, setShowAdditionalIncome] = useState(false);

  const handleSelect = (option) => {
    console.log("Selected employer:", option);
    // You can also update the state or handle the selected value as needed
  };

  const handleAddIncomeSource = () => {
    setShowAdditionalIncome(true);
  };

  const handleRemoveIncomeSource = () => {
    setShowAdditionalIncome(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-4">
      <div>
        <label
          htmlFor="employerName"
          className="block font-semibold text-sm font-medium text-gray-700"
        >
          Employment Status <span className="text-red-600">*</span>
        </label>
        <Dropdown
          options={options}
          label="Select option"
          onSelect={handleSelect}
        />
      </div>

      <div>
        <InputField
          id="JobTitle"
          label="Job Title"
          placeholder="Job Title"
          required
        />
      </div>

      <div>
        <label
          htmlFor="employerName"
          className="block font-semibold text-sm  text-gray-700"
        >
          How long have you worked there?{" "}
          <span className="text-red-600">*</span>
        </label>
        <Dropdown
          options={options}
          label="Select option"
          onSelect={handleSelect}
        />
      </div>

      <div>
        <label
          htmlFor="employerName"
          className="block font-semibold text-sm  text-gray-700"
        >
          How much did you make a month (before taxes)?{" "}
          <span className="text-red-600">*</span>
        </label>
        <Dropdown
          options={options}
          label="Select option"
          onSelect={handleSelect}
        />
      </div>

      {/* Additional income dropdown and remove button, shown when the button is clicked */}
      {showAdditionalIncome && (
        <div className="col-span-1  md:col-span-2 relative">
          <label
            htmlFor="additionalIncome"
            className="block font-semibold text-sm  text-gray-700"
          >
            How much did you make a month (before taxes)?{" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="flex w-full gap-4 bg-red-50">
            {" "}
            <Dropdown
              options={options}
              label="Select option"
              onSelect={handleSelect}
              className="w-full"
            />
            {/* Remove button (cross icon) */}
            <button
              type="button"
              onClick={handleRemoveIncomeSource}
              className=" text-red-600  font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Plus button to add another income source */}
      <div>
        {!showAdditionalIncome && (
          <button
            type="button"
            onClick={handleAddIncomeSource}
            className="flex items-center text-red-600 mt-4 font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add another income source
          </button>
        )}
      </div>
    </div>
  );
}
