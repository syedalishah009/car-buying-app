export default function Residence() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="homeAddress" className="block text-sm font-medium text-gray-700">
            Home Address <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="homeAddress"
            placeholder="Home Address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </div>
  
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="city"
            placeholder="City"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </div>
  
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="state"
            placeholder="State"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </div>
  
        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
            Zip Code <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="zipCode"
            placeholder="Zip Code"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </div>
  
        <div className="col-span-2">
          <label htmlFor="rentOrOwn" className="block text-sm font-medium text-gray-700">
            Do you own or rent?
          </label>
          <div className="mt-2 flex items-center">
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2">
              Own
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md mr-2">
              Rent
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
              Other
            </button>
          </div>
        </div>
      </div>
    );
  }
  