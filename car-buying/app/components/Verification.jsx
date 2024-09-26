// PersonalInfo.js

import InputField from "../ui/InputField";

export default function Verification() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <InputField
        id="Social Security Number"
        label="Social Security Number"
        placeholder="Security Number"
        required={true}
      />
      <InputField
        id="Date of Birth"
        label="Date of Birth"
        placeholder="Date of Birth"
        required={true}
        type="date"
      />
    
      
    </div>
  );
}
