// components/ProfileButton.js
'use client';
import Image from "next/image";

 // Next.js directive to make this component client-side

export default function ProfileButton() {
  const handleProfileClick = () => {
    console.log('Profile button clicked');
    // Add any logic for the profile button here (e.g., open a profile menu)
  };

  return (
    <button
      onClick={handleProfileClick}
      className="flex items-center space-x-2  px-3 py-2 rounded-md hover:bg-gray-700"
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
  );
}
