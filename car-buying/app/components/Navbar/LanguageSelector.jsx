'use client'; // Next.js directive to make this component client-side

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Import the down arrow icon

export default function LanguageSelector() {
  const [language, setLanguage] = useState('US'); // Default language
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown visibility

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false); // Close the dropdown after selecting a language
    console.log('Selected language:', lang);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
        className="flex items-center space-x-2  px-3 py-2 rounded-md hover:bg-gray-700"
      >
        <img
          src={language === 'US' ? '/us-flag.png' : '/uk-flag.png'}
          alt={language}
          className="h-5 w-5"
        />
        <span>{language === 'US' ? 'English (US)' : 'English (UK)'}</span>
        <FaChevronDown className={`transition-transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} /> {/* Down arrow with rotation */}
      </button>

      {dropdownOpen && (
        <div className="absolute mt-2 right-0 w-32 bg-white text-black rounded-md shadow-lg z-50">
          <button
            onClick={() => handleLanguageChange('US')}
            className="flex items-center w-full px-3 py-2 hover:bg-gray-200"
          >
            <img src="/us-flag.png" alt="US" className="h-5 w-5 mr-2" />
            English (US)
          </button>
          <button
            onClick={() => handleLanguageChange('UK')}
            className="flex items-center w-full px-3 py-2 hover:bg-gray-200"
          >
            <img src="/uk-flag.png" alt="UK" className="h-5 w-5 mr-2" />
            English (UK)
          </button>
        </div>
      )}
    </div>
  );
}
