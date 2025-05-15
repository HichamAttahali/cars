import React, { useState, useEffect } from 'react';
import SearchFilters from '../components/SearchFilters';
import CarCard from '../components/CarCard';
import { cars } from '../data/cars';
import { Car, CarFilterOptions } from '../types';

const Inventory: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const [activeFilters, setActiveFilters] = useState<CarFilterOptions>({});

  const handleFilterChange = (filters: CarFilterOptions) => {
    setActiveFilters(filters);
  };

  useEffect(() => {
    let result = [...cars];

    // Apply filters
    if (activeFilters.make) {
      result = result.filter(car => car.make === activeFilters.make);
    }
    
    if (activeFilters.model) {
      result = result.filter(car => car.model === activeFilters.model);
    }
    
    if (activeFilters.minYear) {
      result = result.filter(car => car.year >= (activeFilters.minYear ?? 0));
    }
    
    if (activeFilters.maxYear) {
      result = result.filter(car => car.year <= (activeFilters.maxYear ?? Infinity));
    }
    
    if (activeFilters.minPrice) {
      result = result.filter(car => car.price >= (activeFilters.minPrice ?? 0));
    }
    
    if (activeFilters.maxPrice) {
      result = result.filter(car => car.price <= (activeFilters.maxPrice ?? Infinity));
    }
    
    if (activeFilters.fuelType) {
      result = result.filter(car => car.fuelType === activeFilters.fuelType);
    }
    
    if (activeFilters.transmission) {
      result = result.filter(car => car.transmission === activeFilters.transmission);
    }

    setFilteredCars(result);
  }, [activeFilters]);

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-gray-900 text-white py-16">
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Our Inventory</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our extensive collection of premium vehicles. Use the filters below to find your perfect match.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <SearchFilters onFilterChange={handleFilterChange} />

        {/* Results count */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">
            {filteredCars.length} {filteredCars.length === 1 ? 'vehicle' : 'vehicles'} available
          </h2>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Sort by:</span>
            <select 
              className="border-gray-300 rounded-md text-sm focus:ring-red-500 focus:border-red-500"
              defaultValue="newest"
            >
              <option value="newest">Newest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="mileage">Lowest Mileage</option>
            </select>
          </div>
        </div>

        {/* Car grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No vehicles match your current filters</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or browse our available inventory.</p>
            <button
              onClick={() => setActiveFilters({})}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;