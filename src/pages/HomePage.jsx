import React, { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';

function HomePage() {
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');
  // State for properties fetched from "API"
  const [properties, setProperties] = useState([]);
  // State for loading status
  const [loading, setLoading] = useState(true);
  // State for error messages
  const [error, setError] = useState(null);

  // useEffect hook for data fetching
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Simulate API call using fetch to our local JSON file
        const response = await fetch('/src/api/properties.json'); // Path to your local JSON
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProperties(data); // Set the fetched properties to state
      } catch (err) {
        setError(err.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchProperties(); // Call the fetch function when component mounts
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Filter properties based on the search term
  const filteredProperties = properties.filter((property) =>
    property.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Conditional rendering based on loading/error states
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-700">Loading properties...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-red-600">Error: {error}</p>
        <p className="text-md text-gray-500 mt-2">Please check your network connection or file path.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome to Torque Real Estate!
        </h1>
        <p className="text-lg text-gray-600">
          Find your perfect HOME.
        </p>
      </div>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-xl py-8">No properties found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;