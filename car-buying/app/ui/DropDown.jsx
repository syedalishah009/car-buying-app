// components/Dropdown.js

import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai'; // Add this for the dropdown arrow icon

const Dropdown = ({ options, label, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="relative w-full">
      <button
        onClick={toggleDropdown}
        className="block w-full text-left border rounded p-2 bg-white flex justify-between items-center"
      >
        <span className=''>{selectedOption ? selectedOption.label : label}</span>
        <AiOutlineDown className="ml-2" />
      </button>
      {isOpen && (
        <ul className="absolute w-full bg-white border rounded shadow-md mt-1 z-10">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
