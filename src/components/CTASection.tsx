import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-3/5">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to find your dream car?
            </h2>
            <p className="mt-3 text-lg text-gray-300 max-w-3xl">
              Our team of automotive experts is ready to help you find the perfect vehicle that meets all your needs. Schedule a test drive today or contact us for more information.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
              >
                Schedule a Test Drive
              </Link>
              <a
                href="tel:5551234567"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
              >
                <PhoneCall className="h-5 w-5 mr-2" />
                Call Us Now
              </a>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-2/5 lg:flex lg:justify-end">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4873693/pexels-photo-4873693.jpeg"
                alt="Car sales representative with customer"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;