import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-green-800 text-white">
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Logo" className="mr-2 w-10 h-10" />
        <span className="text-lg font-bold">mssnojokoro</span>
      </div>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
        <Link to="/events" className="hover:text-yellow-300">Events and Programs</Link>
        <Link to="/news" className="hover:text-yellow-300">News</Link>
        <Link to="/blog" className="hover:text-yellow-300">Blog</Link>
        <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;