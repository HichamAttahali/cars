import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Heart, Menu, Search, ShoppingCart, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SallCars</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/inventory" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Inventory
            </Link>
            <Link to="/deals" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Special Deals
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Desktop action items */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button 
              aria-label="Search"
              className="p-2 rounded-full text-gray-500 hover:text-red-600 hover:bg-gray-100 transition-colors duration-200"
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              aria-label="Favorites"
              className="p-2 rounded-full text-gray-500 hover:text-red-600 hover:bg-gray-100 transition-colors duration-200"
            >
              <Heart className="h-5 w-5" />
            </button>
            <button 
              aria-label="Cart"
              className="p-2 rounded-full text-gray-500 hover:text-red-600 hover:bg-gray-100 transition-colors duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
            <Link 
              to="/contact" 
              className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            >
              Schedule a Test Drive
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-expanded="false"
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/inventory"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Inventory
            </Link>
            <Link
              to="/deals"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Special Deals
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-around px-5">
              <button 
                aria-label="Search"
                className="p-2 rounded-full text-gray-500 hover:text-red-600 hover:bg-gray-100"
              >
                <Search className="h-5 w-5" />
              </button>
              <button 
                aria-label="Favorites"
                className="p-2 rounded-full text-gray-500 hover:text-red-600 hover:bg-gray-100"
              >
                <Heart className="h-5 w-5" />
              </button>
              <button 
                aria-label="Cart"
                className="p-2 rounded-full text-gray-500 hover:text-red-600 hover:bg-gray-100"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-3 px-2">
              <Link
                to="/contact"
                className="block w-full px-4 py-2 text-center text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md shadow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule a Test Drive
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;