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
              <span className="font-bold">Name</span>
              <p>JP Smith</p>
            </div>
            <div>
              <span className="font-bold">Email</span>
              <p>jpsmith@visiblepaths.com</p>
            </div>
            <div>
              <span className="font-bold">Phone Number</span>
              <p>508-000-0000</p>
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
              <span className="font-bold">Address</span>
              <p>100 Main Street, City, State, ZIP</p>
            </div>
            <div>
              <span className="font-bold">Time At Residence</span>
              <p>3 years 4 months</p>
            </div>
            <div>
              <span className="font-bold">Monthly House Expense</span>
              <p>$1,100</p>
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
              <span className="font-bold">Status</span>
              <p>Full-Time Employee</p>
            </div>
            <div>
              <span className="font-bold">Job Title</span>
              <p>Tech</p>
            </div>
            <div>
              <span className="font-bold">Time At Employer</span>
              <p>5 Years</p>
            </div>
            <div>
              <span className="font-bold">Monthly Income</span>
              <p>$2,800</p>
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
              <span className="font-bold">Social Security Number</span>
              <p>XXX-XX-XXXX</p>
            </div>
            <div>
              <span className="font-bold">Date of Birth</span>
              <p>DD/MM/YY</p>
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
