import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import CarDetail from './pages/CarDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* Placeholder routes for future development */}
          <Route path="*" element={
            <div className="pt-16 min-h-screen flex flex-col items-center justify-center bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Under Construction</h2>
              <p className="text-gray-600">This page is coming soon. Please check back later.</p>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;