import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../types';
import { Heart, Info } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Format price with commas
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(car.price);

  // Calculate discount price if car is on sale
  const discountedPrice = car.isOnSale && car.discountAmount
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(car.price - car.discountAmount)
    : null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img 
          src={car.images[0]} 
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-md transition-colors duration-200 hover:bg-gray-100"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            className={`h-5 w-5 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} 
          />
        </button>
        {car.isNew && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
            New Arrival
          </span>
        )}
        {car.isOnSale && (
          <span className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
            Sale
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {car.year} {car.make} {car.model}
        </h3>
        
        <div className="mt-1 flex items-baseline">
          {car.isOnSale && discountedPrice ? (
            <>
              <span className="text-xl font-bold text-gray-900">{discountedPrice}</span>
              <span className="ml-2 text-sm text-gray-500 line-through">{formattedPrice}</span>
            </>
          ) : (
            <span className="text-xl font-bold text-gray-900">{formattedPrice}</span>
          )}
        </div>
        
        <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-600">
          <span className="px-2 py-1 bg-gray-100 rounded-md">{car.mileage.toLocaleString()} mi</span>
          <span className="px-2 py-1 bg-gray-100 rounded-md">{car.transmission}</span>
          <span className="px-2 py-1 bg-gray-100 rounded-md">{car.fuelType}</span>
          <span className="px-2 py-1 bg-gray-100 rounded-md">{car.exteriorColor}</span>
        </div>
        
        <p className="mt-3 text-sm text-gray-600 line-clamp-2">
          {car.description}
        </p>
        
        <div className="mt-4 flex space-x-2">
          <Link 
            to={`/car/${car.id}`}
            className="flex-1 bg-gray-900 text-white text-center py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-800"
          >
            View Details
          </Link>
          <Link 
            to={`/contact?car=${car.id}`}
            className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
          >
            <Info className="h-4 w-4 mr-1" />
            Inquire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;