"use client";

import Employment from "@/app/components/Employment";
import PersonalInfo from "@/app/components/PersonalInfo";
import Residence from "@/app/components/Residence";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";

// Step titles, descriptions, and content mapping
const steps = [
  { 
    title: "Personal Info", 
    description: "Pre-qualify in minutes to check the financial rates!", 
    component: <PersonalInfo /> 
  },
  { 
    title: "Residence", 
    description: "Hi JP ! Let us know about your current residence.", 
    component: <Residence /> 
  },
  { 
    title: "Employment", 
    description: "Next, tell us about your employment status.", 
    component: <Employment /> 
  },
  { 
    title: "Verification", 
    description: "Now, we just need a little more information to see if you pre-qualify.", 
    component: <div>Verification Content</div> 
  },
  { 
    title: "Summary", 
    description: "Let’s double-check everything.", 
    component: <div>Summary Content</div> 
  },
];

export default function PreQualification() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-10 flex-col"
      style={{ backgroundImage: "url(/bg.png)" }} // You can also use a solid background here
    >
    

      {/* Main content box */}
      <div className="w-full max-w-4xl mx-auto p-6 md:p-8 lg:p-12 bg-white shadow-lg rounded-lg">
        {/* Dynamic Subheader based on current step */}
        <div className="text-center mb-8">
          <p className="text-red-600 font-semibold text-lg mt-2">
            {steps[currentStep].description} {/* Dynamic description */}
          </p>
        </div>

        {/* Steps Navigation */}
        <div className="flex justify-between items-center mb-6 w-full relative">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center relative">
              {/* Step Circle */}
              <div className="flex flex-col items-center relative z-10">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index <= currentStep
                      ? "bg-red-600 text-white"
                      : "border-2 border-black bg-transparent text-black"
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`mt-2 font-medium text-center ${
                    index <= currentStep ? "text-red-600" : "text-black"
                  }`}
                >
                  {step.title}
                </span>
              </div>

              {/* Line connector */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-grow h-0.5 ${
                    index < currentStep ? "bg-red-600" : "bg-black"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Render the current step content */}
        <div className="mt-10">{steps[currentStep].component}</div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-3 w-2/3 mr-9 mt-8">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`px-2 py-1 rounded-md ${
            currentStep === 0
              ? "bg-gray-100 cursor-not-allowed"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          <div className="text-2xl hover:text-white font-semibold">
            {" "}
            <IoArrowBack />
          </div>
        </button>
        <button
          onClick={handleNext}
          className="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          {currentStep === steps.length - 1 ? (
            "Submit"
          ) : (
            <div className="text-lg">
              <FaArrowRight />
            </div>
          )}
        </button>
      </div>
      
      {/* Footer */}
      <div className="mt-8">
        <p>© 2024 VisiblePaths, Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
}
