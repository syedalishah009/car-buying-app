export default function Employment() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="employerName" className="block text-sm font-medium text-gray-700">
            Employer Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="employerName"
            placeholder="Employer Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </div>
  
        <div>
          <label htmlFor="position" className="block text-sm font-medium text-gray-700">
            Position <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="position"
            placeholder="Position"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </div>
  
        <div>
          <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700">
            Annual Income <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            id="annualIncome"
            placeholder="Annual Income"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </div>
  
        <div>
          <label htmlFor="employmentLength" className="block text-sm font-medium text-gray-700">
            Length of Employment <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="employmentLength"
            placeholder="Length of Employment"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </div>
      </div>
    );
  }
  