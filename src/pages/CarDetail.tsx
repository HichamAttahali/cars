import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Fuel, BarChart2, Share2, Heart, MapPin, Clock } from 'lucide-react';
import { cars } from '../data/cars';
import { Car } from '../types';

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      const foundCar = cars.find(c => c.id === id) || null;
      setCar(foundCar);
      if (foundCar) {
        setActiveImage(foundCar.images[0]);
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="pt-16 min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Vehicle Not Found</h2>
        <p className="text-gray-600 mb-6">The vehicle you're looking for may have been sold or removed.</p>
        <Link 
          to="/inventory" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
        >
          Browse Inventory
        </Link>
      </div>
    );
  }

  // Format price with commas
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(car.price);

  // Calculate discount price if car is on sale
  const discountedPrice = car.isOnSale && car.discountAmount
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(car.price - car.discountAmount)
    : null;

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Navigation */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/inventory" className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200">
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back to Inventory
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Image Gallery */}
          <div>
            <div className="mb-4 overflow-hidden rounded-lg bg-gray-100">
              <img 
                src={activeImage} 
                alt={`${car.year} ${car.make} ${car.model}`} 
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {car.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(image)}
                  className={`rounded-lg overflow-hidden border-2 ${activeImage === image ? 'border-red-600' : 'border-transparent'}`}
                >
                  <img 
                    src={image} 
                    alt={`${car.year} ${car.make} ${car.model} - View ${index + 1}`} 
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Car Details */}
          <div className="mt-8 lg:mt-0">
            <div className="flex flex-wrap items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {car.year} {car.make} {car.model}
                </h1>
                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-1 text-sm text-gray-600">4.9 (28 reviews)</span>
                  </div>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm text-gray-600">Stock #: {car.id.toUpperCase()}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button 
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                  aria-label="Share"
                >
                  <Share2 className="h-5 w-5" />
                </button>
                <button 
                  className={`p-2 rounded-full ${isFavorite ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors duration-200`}
                  aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-600' : ''}`} />
                </button>
              </div>
            </div>

            <div className="mt-6">
              {car.isOnSale && discountedPrice ? (
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">{discountedPrice}</span>
                  <span className="ml-2 text-lg text-gray-500 line-through">{formattedPrice}</span>
                  <span className="ml-2 text-sm font-medium text-white bg-red-600 px-2 py-0.5 rounded">
                    Save {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(car.discountAmount || 0)}
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-900">{formattedPrice}</span>
              )}
              <p className="mt-1 text-sm text-gray-600">Plus taxes and fees</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Overview</h3>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-sm text-gray-800">{car.year} Year</span>
                </div>
                <div className="flex items-center">
                  <BarChart2 className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-sm text-gray-800">{car.mileage.toLocaleString()} miles</span>
                </div>
                <div className="flex items-center">
                  <Fuel className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-sm text-gray-800">{car.fuelType}</span>
                </div>
                <div className="flex items-center">
                  <svg 
                    className="h-5 w-5 text-gray-600 mr-2" 
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
                  <span className="text-sm text-gray-800">{car.transmission}</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-gray-600">
                {car.description}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Colors</h3>
              <div className="mt-2 grid grid-cols-2 gap-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-800">Exterior:</span>
                  <span className="ml-2 text-sm text-gray-600">{car.exteriorColor}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-800">Interior:</span>
                  <span className="ml-2 text-sm text-gray-600">{car.interiorColor}</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
              <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2">
                {car.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <svg 
                      className="h-4 w-4 text-green-500 mr-2" 
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
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                  <span>123 Automotive Drive, San Francisco, CA 94103</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <span>This vehicle typically sells in 5 days</span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link 
                to={`/contact?car=${car.id}`}
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
              >
                Schedule Test Drive
              </Link>
              <Link 
                to={`/financing?car=${car.id}`}
                className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Calculate Financing
              </Link>
            </div>
          </div>
        </div>

        {/* Similar Cars Section */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Vehicles</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars
              .filter(c => c.id !== car.id && c.make === car.make)
              .slice(0, 3)
              .map(similarCar => (
                <div key={similarCar.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={similarCar.images[0]} 
                      alt={`${similarCar.year} ${similarCar.make} ${similarCar.model}`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {similarCar.isNew && (
                      <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                        New Arrival
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {similarCar.year} {similarCar.make} {similarCar.model}
                    </h3>
                    <div className="mt-1">
                      <span className="text-xl font-bold text-gray-900">
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(similarCar.price)}
                      </span>
                    </div>
                    <div className="mt-4">
                      <Link 
                        to={`/car/${similarCar.id}`}
                        className="text-red-600 hover:text-red-800 font-medium transition-colors duration-200"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;