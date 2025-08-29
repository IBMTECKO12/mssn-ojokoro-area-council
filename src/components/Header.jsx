import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-2 bg-green-800 text-white sm:p-4">
      <div className="flex items-center mb-2 sm:mb-0">
        <img src="/images/logo.png" alt="Logo" className="mr-1 w-8 h-8 sm:mr-2 sm:w-10 sm:h-10" />
        <span className="text-base font-bold sm:text-lg">mssnojokoro</span>
      </div>
      <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <Link to="/" className="hover:text-yellow-300 text-sm sm:text-base">Home</Link>
        <Link to="/about" className="hover:text-yellow-300 text-sm sm:text-base">About</Link>
        <Link to="/events" className="hover:text-yellow-300 text-sm sm:text-base">Events and Programs</Link>
        <Link to="/news" className="hover:text-yellow-300 text-sm sm:text-base">News</Link>
        <Link to="/blog" className="hover:text-yellow-300 text-sm sm:text-base">Blog</Link>
        <Link to="/contact" className="hover:text-yellow-300 text-sm sm:text-base">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;