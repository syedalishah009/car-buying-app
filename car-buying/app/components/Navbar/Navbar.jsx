'use client';
import { useState } from 'react';
import Image from 'next/image';
import LanguageSelector from './LanguageSelector';
import ProfileButton from './ProfileButton';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar flex items-center bg-gray-600  justify-between px-6 py-3 text-white">
      {/* Left side: Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src="/logo.png" // Your logo here
          alt="Logo"
          className="w-44 sm:w-full sm:h-full"
          width={250}
          height={250}
        />
      </div>

      {/* Right side: Language Selector and Profile (Desktop and Tablet) */}
      <div className="hidden sm:flex items-center space-x-4">
        <LanguageSelector />
        <ProfileButton />
      </div>

      {/* Hamburger menu icon (Visible on Small Screens) */}
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Toggle Menu (Visible on Small Screens) */}
      {isOpen && (
        <div className="absolute top-16 right-0 mt-2 w-full bg-gray-800 bg-opacity-90 sm:hidden flex flex-col items-center space-y-4 py-4 z-50">
          <LanguageSelector />
          <ProfileButton />
        </div>
      )}
    </nav>
  );
}
