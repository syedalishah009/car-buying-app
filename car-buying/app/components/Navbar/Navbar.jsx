// components/Navbar.js
import Image from 'next/image';
import LanguageSelector from './LanguageSelector';
import ProfileButton from './ProfileButton';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-800 text-white">
      {/* Left side: Logo and Text */}
      <div className="flex items-center space-x-3">
        <Image
          src="/logo.png" // Your logo here
          alt="Logo"
          className=""
          width={300}
          height={300}
        />
      </div>

      {/* Right side: Language Selector and Profile */}
      <div className="flex items-center space-x-4">
        {/* Client-side Components */}
        <LanguageSelector />
        <ProfileButton />
      </div>
    </nav>
  );
}
