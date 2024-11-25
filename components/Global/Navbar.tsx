import Link from 'next/link';
import { useState } from 'react';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
} from 'react-icons/io5';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const openSidebar = () => {
    setActive(!isActive);
  };

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-4 sm:px-8">
        {/* Social Media Icons */}
        <div className="flex space-x-4 text-white">
          <IoLogoFacebook className="w-6 h-6 hover:text-green-300" />
          <IoLogoInstagram className="w-6 h-6 hover:text-green-300" />
          <IoLogoLinkedin className="w-6 h-6 hover:text-green-300" />
          <IoLogoGithub className="w-6 h-6 hover:text-green-300" />
          <IoLogoTwitter className="w-6 h-6 hover:text-green-300" />
        </div>

        {/* Centered Navbar Menu */}
        <nav className="hidden md:flex space-x-8 uppercase tracking-wide text-white font-semibold">
          <Link href="/" className="hover:text-green-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-600">
            About
          </Link>
          <Link href="/blogs" className="hover:text-green-600">
            Blogs
          </Link>
          <Link href="/events" className="hover:text-green-600">
            Events
          </Link>
          <Link href="/contributors" className="hover:text-green-600">
            Contributors
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={openSidebar} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-green-700 text-white transform ${
          isActive ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={openSidebar}
          className="absolute top-4 right-4 text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <nav className="flex flex-col items-start mt-16 ml-6 space-y-4">
          <Link href="/" className="hover:text-green-300 font-semibold">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-300 font-semibold">
            About
          </Link>
          <Link href="/blogs" className="hover:text-green-300 font-semibold">
            Blogs
          </Link>
          <Link href="/events" className="hover:text-green-300 font-semibold">
            Events
          </Link>
          <Link href="/contributors" className="hover:text-green-300 font-semibold">
            Contributors
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
