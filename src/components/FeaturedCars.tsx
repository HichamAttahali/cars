import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cars } from '../data/cars';
import CarCard from './CarCard';

const FeaturedCars: React.FC = () => {
  const featuredCars = cars.filter(car => car.isFeatured);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Vehicles</h2>
          <Link 
            to="/inventory"
            className="text-red-600 hover:text-red-800 flex items-center font-medium transition-colors duration-200"
          >
            View All <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;