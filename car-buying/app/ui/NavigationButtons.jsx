import React from "react";

const NavigationButtons = () => {
  return (
    <div>
      {" "}
      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`px-6 py-2 rounded-md ${
            currentStep === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default NavigationButtons;
