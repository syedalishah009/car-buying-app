// components/ProfileButton.js
'use client';
import { useState } from 'react';
import Image from "next/image";

export default function ProfileButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={handleProfileClick}
        className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-700"
      >
        <Image
          src="/profile.png" // Your profile icon here
          alt="Profile"
          className="h-10 w-10 rounded-full"
          width={100}
          height={100}
        />
        <span>JP</span>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Edit Profile</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Personality</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Membership</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Recommendations</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Referrals</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Help Center</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sign Out</a>
        </div>
      )}
    </div>
  );
}
