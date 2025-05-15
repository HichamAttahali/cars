import React, { useState } from 'react';
import { Search, Sliders } from 'lucide-react';
import { makes, models, years, fuelTypes, transmissions } from '../data/cars';
import { CarFilterOptions } from '../types';

interface SearchFiltersProps {
  onFilterChange: (filters: CarFilterOptions) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onFilterChange }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<CarFilterOptions>({});

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    const updatedFilters = {
      ...filters,
      [name]: value === '' ? undefined : name.includes('Price') || name.includes('Year') 
        ? parseInt(value, 10) 
        : value
    };
    
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleReset = () => {
    setFilters({});
    onFilterChange({});
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Find Your Perfect Car</h2>
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="flex items-center text-sm font-medium text-gray-600 hover:text-red-600 transition-colors duration-200"
        >
          <Sliders className="h-4 w-4 mr-1" />
          {isFiltersOpen ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
              Make
            </label>
            <select
              id="make"
              name="make"
              value={filters.make || ''}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            >
              <option value="">All Makes</option>
              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
              Model
            </label>
            <select
              id="model"
              name="model"
              value={filters.model || ''}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            >
              <option value="">All Models</option>
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700 mb-1">
              Fuel Type
            </label>
            <select
              id="fuelType"
              name="fuelType"
              value={filters.fuelType || ''}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            >
              <option value="">All Fuel Types</option>
              {fuelTypes.map((fuelType) => (
                <option key={fuelType} value={fuelType}>
                  {fuelType}
                </option>
              ))}
            </select>
          </div>
        </div>

        {isFiltersOpen && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
            <div>
              <label htmlFor="minYear" className="block text-sm font-medium text-gray-700 mb-1">
                Min Year
              </label>
              <select
                id="minYear"
                name="minYear"
                value={filters.minYear || ''}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              >
                <option value="">Any</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="maxYear" className="block text-sm font-medium text-gray-700 mb-1">
                Max Year
              </label>
              <select
                id="maxYear"
                name="maxYear"
                value={filters.maxYear || ''}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              >
                <option value="">Any</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
                Min Price
              </label>
              <select
                id="minPrice"
                name="minPrice"
                value={filters.minPrice || ''}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              >
                <option value="">Any</option>
                <option value="20000">$20,000</option>
                <option value="30000">$30,000</option>
                <option value="40000">$40,000</option>
                <option value="50000">$50,000</option>
                <option value="60000">$60,000</option>
                <option value="70000">$70,000</option>
                <option value="80000">$80,000</option>
                <option value="90000">$90,000</option>
                <option value="100000">$100,000</option>
              </select>
            </div>

            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
                Max Price
              </label>
              <select
                id="maxPrice"
                name="maxPrice"
                value={filters.maxPrice || ''}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              >
                <option value="">Any</option>
                <option value="30000">$30,000</option>
                <option value="40000">$40,000</option>
                <option value="50000">$50,000</option>
                <option value="60000">$60,000</option>
                <option value="70000">$70,000</option>
                <option value="80000">$80,000</option>
                <option value="90000">$90,000</option>
                <option value="100000">$100,000</option>
                <option value="150000">$150,000</option>
                <option value="200000">$200,000</option>
              </select>
            </div>

            <div>
              <label htmlFor="transmission" className="block text-sm font-medium text-gray-700 mb-1">
                Transmission
              </label>
              <select
                id="transmission"
                name="transmission"
                value={filters.transmission || ''}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              >
                <option value="">All Transmissions</option>
                {transmissions.map((transmission) => (
                  <option key={transmission} value={transmission}>
                    {transmission}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
          <button
            type="button"
            onClick={() => onFilterChange(filters)}
            className="flex-grow bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center"
          >
            <Search className="h-4 w-4 mr-2" />
            Search Vehicles
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex-grow sm:flex-grow-0 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-200"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;