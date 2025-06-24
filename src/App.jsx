import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      {/* Main layout container: flex column to push footer to the bottom */}
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header always at the top */}
        <Header />

        {/* Main content area - grows to fill available space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/property/:id" element={<PropertyDetailPage />} />
          </Routes>
        </main>

        {/* Footer always at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;