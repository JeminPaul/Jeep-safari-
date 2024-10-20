import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../Assets/logo14.png"; // Adjust the path if the structure is different



const Header= () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-500 text-white py-4 shadow-md sticky top-0 z-50 border-red-700">
      <nav className="container mx-auto px-10">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-2xl font-bold">
            <Link to="/" className="hover:text-gray-300 flex items-center">
              <img src={logo} alt="MyTourSite" className="w-28 h-16 mr-4" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link to="/" className="hover:text-slate-900 font-bold text-xl ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-slate-800 font-semibold text-xl">
                Tour Packages
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-slate-700 font-semibold text-xl">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-slate-700 font-semibold text-xl">
                Rooms
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4">
            <li>
              <Link to="/" className="block hover:text-slate-900 font-bold text-xl" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/packages" className="block hover:text-slate-800 font-semibold text-xl" onClick={toggleMenu}>
                Tour Packages
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-slate-700 font-semibold text-xl" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="block hover:text-slate-700 font-semibold text-xl" onClick={toggleMenu}>
                Rooms
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;