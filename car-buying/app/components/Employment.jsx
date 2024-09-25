import Dropdown from "../ui/DropDown";
import InputField from "../ui/InputField";

export default function Employment() {
    const options = [
        { value: 'option 1', label: 'option 1' },
        { value: 'option 2', label: 'option 2' },
        { value: 'option 3', label: 'option 3' },
      ];
      const handleSelect = (option) => {
        console.log('Selected employer:', option);
        // You can also update the state or handle the selected value as needed
      };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-4">
     <div>
        <label htmlFor="employerName" className="block text-sm font-medium text-gray-700">
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
        required={true}
      />
      </div>

      <div>
        <label htmlFor="employerName" className="block text-sm font-medium text-gray-700">
        How long have you worked there ? <span className="text-red-600">*</span>
        </label>
        <Dropdown 
          options={options} 
          label="Select option" 
          onSelect={handleSelect} 
        />
      </div>

      <div>
        <label htmlFor="employerName" className="block text-sm font-medium text-gray-700">
        How much did you make a month (before taxes) ?  <span className="text-red-600">*</span>
        </label>
        <Dropdown 
          options={options} 
          label="Select option" 
          onSelect={handleSelect} 
        />
      </div>
    </div>
  );
}
