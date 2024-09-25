import { useState } from "react"; // Import useState
import InputField from "../ui/InputField";

export default function Residence() {
  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState("rent");

  // Function to handle button clicks
  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-4">
      <InputField
        id="homeAddress"
        label="Home Address"
        placeholder="Home Address"
        required={true}
      />
      <InputField
        id="city"
        label="City"
        placeholder="City"
        required={true}
      />
      <InputField
        id="state"
        label="State"
        placeholder="State"
        required={true}
      />
      <InputField
        id="zipCode"
        label="Zip Code"
        placeholder="Zip Code"
        required={true}
      />
      <InputField
        id="live"
        label="How long have you lived there?"
        placeholder="live there?"
        required={true}
      />

      <div>
        <label htmlFor="rentOrOwn" className="block text-sm font-medium ">
          Do you own or rent ? <span className="text-red-600">*</span>
        </label>
        <div className="mt-2 space-x-6">
          <button
            className={`px-4 py-1 font-bold border ${
              selectedOption === "own"
                ? "bg-black text-white"
                : "text-red-700 border-red-600"
            }`}
            onClick={() => handleButtonClick("own")}
          >
            Own
          </button>
          <button
            className={`px-4 py-1 font-bold border ${
              selectedOption === "rent"
                ? "bg-black text-white"
                : "text-red-700 border-red-600"
            }`}
            onClick={() => handleButtonClick("rent")}
          >
            Rent
          </button>
          <button
            className={`px-4 py-1 font-bold border ${
              selectedOption === "other"
                ? "bg-black text-white"
                : "text-red-700 border-red-600"
            }`}
            onClick={() => handleButtonClick("other")}
          >
            Other
          </button>
        </div>
      </div>
    </div>
  );
}
