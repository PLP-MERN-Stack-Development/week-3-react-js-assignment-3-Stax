import React from 'react';
import { Link } from 'react-router-dom'; // <--- THIS LINE IS CRUCIAL FOR LINK TO WORK

function PropertyCard({ property }) {
  // Ensure 'id' is destructured - it's used in the Link's 'to' prop
  const { id, imageUrl, address, price, bedrooms, bathrooms } = property;

  return (
    // The <Link> component must wrap the entire card's div.
    // The 'to' prop uses a template literal to create the dynamic URL.
    // 'className="block"' makes the entire card area clickable.
    <Link to={`/property/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
        <img src={imageUrl} alt={address} className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{address}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-2">${price.toLocaleString()}</p>
        <div className="flex justify-between text-gray-600 text-sm">
          <span>{bedrooms} Beds</span>
          <span>{bathrooms} Baths</span>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard; // <--- THIS LINE IS CRUCIAL FOR THIS COMPONENT TO BE IMPORTABLE