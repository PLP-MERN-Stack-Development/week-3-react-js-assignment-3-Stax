import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// We'll import the properties data directly for now to simulate fetching a single property
// In a real app, you might fetch this from a specific API endpoint like /api/properties/:id
import allProperties from '../api/properties.json'; // Adjust path if your api folder is elsewhere

function PropertyDetailPage() {
  const { id } = useParams(); // Get the 'id' from the URL parameters
  const [property, setProperty] = useState(null); // State for the current property
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    // Simulate fetching single property data
    // In a real app, you might make an API call like:
    // const response = await fetch(`/api/properties/${id}`);
    // For now, we filter from our local JSON
    const foundProperty = allProperties.find(p => p.id === id);

    if (foundProperty) {
      setProperty(foundProperty);
      setLoading(false);
    } else {
      setError('Property not found.');
      setLoading(false);
    }
  }, [id]); // Re-run effect if 'id' in URL changes

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-700">Loading property details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <p className="text-xl text-red-600 mb-4">Error: {error}</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  // If property is found, display its details
  return (
    <div className="container mx-auto p-4 max-w-4xl bg-white shadow-lg rounded-lg my-8">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to all properties
      </Link>
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        <img 
          src={property.imageUrl} 
          alt={property.address} 
          className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-md" 
        />
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{property.address}</h1>
          <p className="text-3xl font-bold text-blue-700 mb-4">${property.price.toLocaleString()}</p>
          <div className="flex space-x-6 text-gray-700 mb-6">
            <span><strong className="text-gray-900">{property.bedrooms}</strong> Beds</span>
            <span><strong className="text-gray-900">{property.bathrooms}</strong> Baths</span>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">{property.description}</p>
          {/* Add more details here as needed */}
          <div className="mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 mr-4">
              Contact Agent
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
              Schedule Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailPage; // <--- THIS LINE IS CRITICAL!