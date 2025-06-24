import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/App Title - links to Home page */}
        <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition duration-300">
          Torque Real Estate
        </Link>

        {/* Navigation Links (can add more later) */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-200 transition duration-300">Home</Link>
            </li>
            {/* You can add more links here as you create more pages, e.g.:
            <li>
              <Link to="/about" className="hover:text-blue-200 transition duration-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-200 transition duration-300">Contact</Link>
            </li>
            */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; // <--- THIS LINE IS CRITICAL!