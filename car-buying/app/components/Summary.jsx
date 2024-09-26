import React from "react";

const ApplicationForm = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="rounded-lg p-6 mb-6">
        {/* Personal Section */}
        <div className="border bg-white border-gray-300 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-red-600 text-lg">Personal</h3>
            <button className="text-red-600">
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <span className="font-bold text-black">Name</span>
              <p className="text-black">JP Smith</p>
            </div>
            <div>
              <span className="font-bold text-black">Email</span>
              <p className="text-black">jpsmith@visiblepaths.com</p>
            </div>
            <div>
              <span className="font-bold text-black">Phone Number</span>
              <p className="text-black">508-000-0000</p>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="border bg-white border-gray-300 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-red-600 text-lg">Address</h3>
            <button className="text-red-600">
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <span className="font-bold text-black">Address</span>
              <p className="text-black">100 Main Street, City, State, ZIP</p>
            </div>
            <div>
              <span className="font-bold text-black">Time At Residence</span>
              <p className="text-black">3 years 4 months</p>
            </div>
            <div>
              <span className="font-bold text-black">Monthly House Expense</span>
              <p className="text-black">$1,100</p>
            </div>
          </div>
        </div>

        {/* Employment Section */}
        <div className="border bg-white border-gray-300 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-red-600 text-lg">Employment</h3>
            <button className="text-red-600">
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <span className="font-bold text-black">Status</span>
              <p className="text-black">Full-Time Employee</p>
            </div>
            <div>
              <span className="font-bold text-black">Job Title</span>
              <p className="text-black">Tech</p>
            </div>
            <div>
              <span className="font-bold text-black">Time At Employer</span>
              <p className="text-black">5 Years</p>
            </div>
            <div>
              <span className="font-bold text-black">Monthly Income</span>
              <p className="text-black">$2,800</p>
            </div>
          </div>
        </div>

        {/* Verification Section */}
        <div className="border bg-white border-gray-300 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-red-600 text-lg">Verification</h3>
            <button className="text-red-600">
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="font-bold text-black">Social Security Number</span>
              <p className="text-black">XXX-XX-XXXX</p>
            </div>
            <div>
              <span className="font-bold text-black">Date of Birth</span>
              <p className="text-black">DD/MM/YY</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button className="bg-red-600 text-white py-2 px-6 rounded-lg">
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
