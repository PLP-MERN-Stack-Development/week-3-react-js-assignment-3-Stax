import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="bg-gray-800 text-white p-6 text-center mt-auto">
      <div className="container mx-auto">
        <p className="text-lg mb-2">Torque Real Estate &copy; {currentYear}</p>
        <p className="text-sm text-gray-400">Your trusted partner in finding the perfect home.</p>
        {/* Remove the empty {} and the outer {} around the div */}
        <div className="flex justify-center space-x-4 mt-4"> {/* Corrected line: No curly braces around the div itself */}
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;