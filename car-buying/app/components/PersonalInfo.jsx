// PersonalInfo.js

import InputField from "../ui/InputField";

export default function PersonalInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <InputField
        id="firstName"
        label="First Name"
        placeholder="First Name"
        required={true}
      />
      <InputField
        id="lastName"
        label="Last Name"
        placeholder="Last Name"
        required={true}
      />
      <InputField
        id="email"
        label="Email Address"
        type="email"
        placeholder="Email Address"
        required={true}
      />
      <InputField
        id="confirmEmail"
        label="Confirm Email Address"
        type="email"
        placeholder="Confirm Email Address"
        required={true}
      />
    </div>
  );
}
