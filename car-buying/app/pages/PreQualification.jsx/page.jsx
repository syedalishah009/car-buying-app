"use client";

import Employment from "@/app/components/Employment";
import PersonalInfo from "@/app/components/PersonalInfo";
import Residence from "@/app/components/Residence";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const steps = [
  "Personal Info",
  "Residence",
  "Employment",
  "Verification",
  "Summary",
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <Residence />;
      case 2:
        return <Employment />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center flex-col"
      style={{ backgroundImage: "url(/path-to-your-background.jpg)" }} // You can also use a solid background here
    >
      <div className="w-full max-w-4xl mx-auto p-6 md:p-8 lg:p-12 bg-white bg-opacity-90 shadow-lg rounded-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Finance Pre-Qualification
          </h1>
          <p className="text-red-600 text-lg mt-2">
            Let us know about your current residence!
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
                  {step}
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

        {/* Render the current step */}
        <div className="mb-8">{renderStepContent()}</div>
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-end gap-3 w-2/3 mr-9 mt-8">
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
          className="px-4 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          {currentStep === steps.length - 1 ? "Submit" : <div><FaArrowRight /></div>}
        </button>
      </div>
    </div>
  );
}
