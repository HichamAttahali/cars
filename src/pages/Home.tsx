import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedCars from '../components/FeaturedCars';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCars />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SallCars</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service and premium vehicles to meet your every need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-8 h-8 text-red-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Selection</h3>
              <p className="text-gray-600">Curated inventory of high-quality vehicles from the world's top manufacturers.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-8 h-8 text-red-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Financing</h3>
              <p className="text-gray-600">Flexible financing options tailored to your budget with competitive rates.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-8 h-8 text-red-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Exceptional Service</h3>
              <p className="text-gray-600">Personalized attention from our expert team before, during, and after your purchase.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Models Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Models Available</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Be the first to drive these brand new arrivals at SallCars.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.pexels.com/photos/18387606/pexels-photo-18387606/free-photo-of-bmw-x2-m35i-automobile.jpeg" 
                  alt="BMW X2 M35i" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">BMW X2 M35i</h3>
                <p className="text-gray-600 mb-4">Experience thrilling performance in this compact luxury crossover.</p>
                <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">New Arrival</span>
              </div>
            </div>
            
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.pexels.com/photos/9607362/pexels-photo-9607362.jpeg" 
                  alt="Mercedes-Benz EQS" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mercedes-Benz EQS</h3>
                <p className="text-gray-600 mb-4">The pinnacle of electric luxury with cutting-edge technology.</p>
                <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">New Arrival</span>
              </div>
            </div>
            
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.pexels.com/photos/17028814/pexels-photo-17028814/free-photo-of-automobile-car-sports-car-vehicle.jpeg" 
                  alt="Audi e-tron GT" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Audi e-tron GT</h3>
                <p className="text-gray-600 mb-4">Exhilarating performance meets sustainable luxury in this electric sports car.</p>
                <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">New Arrival</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default Home;