import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-no-repeat bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg)',
          backgroundPosition: 'center 30%'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Find Your Perfect Drive
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Explore our exclusive collection of premium vehicles, meticulously selected to match your lifestyle and exceed your expectations.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/inventory"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
            >
              Browse Inventory
            </Link>
            <Link
              to="/deals"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
            >
              View Special Offers
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom accent section */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent"></div>

      {/* Features bar */}
      <div className="relative z-10 bg-white py-5 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex items-center justify-center md:justify-start">
              <div className="text-red-600 font-semibold">Premium Selection</div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="text-red-600 font-semibold">Competitive Financing</div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="text-red-600 font-semibold">Extended Warranty</div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Link to="/about" className="flex items-center text-gray-900 hover:text-red-600 font-semibold transition-colors duration-200">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;