import { Car } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    make: 'BMW',
    model: '5 Series',
    year: 2023,
    price: 65000,
    mileage: 0,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    exteriorColor: 'Alpine White',
    interiorColor: 'Black',
    description: 'The BMW 5 Series is a luxury mid-size sedan with cutting-edge technology, refined comfort, and the ultimate driving experience.',
    features: ['Heated Seats', 'Navigation', 'Sunroof', 'Leather Interior', 'Parking Sensors', 'Premium Sound System'],
    images: [
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
      'https://images.pexels.com/photos/7777818/pexels-photo-7777818.jpeg'
    ],
    isFeatured: true,
    isNew: true,
    isOnSale: false
  },
  {
    id: '2',
    make: 'Audi',
    model: 'A6',
    year: 2022,
    price: 58000,
    mileage: 5200,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    exteriorColor: 'Mythos Black',
    interiorColor: 'Brown',
    description: 'The Audi A6 combines innovative technology, sophisticated design, and powerful performance in a refined luxury sedan.',
    features: ['360° Camera', 'Adaptive Cruise Control', 'Bang & Olufsen Sound', 'Panoramic Sunroof', 'Head-Up Display'],
    images: [
      'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg',
      'https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg',
      'https://images.pexels.com/photos/849835/pexels-photo-849835.jpeg'
    ],
    isFeatured: true,
    isNew: false,
    isOnSale: true,
    discountAmount: 5000
  },
  {
    id: '3',
    make: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2023,
    price: 72000,
    mileage: 0,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    exteriorColor: 'Obsidian Black',
    interiorColor: 'Macchiato Beige',
    description: 'The Mercedes-Benz E-Class sets the standard in luxury sedans with its elegant design, exceptional comfort, and advanced technology.',
    features: ['MBUX Infotainment', 'Burmester Surround Sound', 'Wireless Charging', 'Active Parking Assist', 'Driver Assistance Package'],
    images: [
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg'
    ],
    isFeatured: true,
    isNew: true,
    isOnSale: false
  },
  {
    id: '4',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 49000,
    mileage: 1200,
    fuelType: 'Electric',
    transmission: 'Automatic',
    exteriorColor: 'Pearl White',
    interiorColor: 'Black',
    description: 'The Tesla Model 3 delivers a long range, futuristic interior, and impressive performance in an all-electric vehicle.',
    features: ['Autopilot', '15" Touchscreen', 'Glass Roof', 'Premium Interior', 'Supercharger Access'],
    images: [
      'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg',
      'https://images.pexels.com/photos/9189175/pexels-photo-9189175.jpeg',
      'https://images.pexels.com/photos/11771816/pexels-photo-11771816.jpeg'
    ],
    isFeatured: false,
    isNew: false,
    isOnSale: false
  },
  {
    id: '5',
    make: 'Porsche',
    model: '911',
    year: 2022,
    price: 120000,
    mileage: 3600,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    exteriorColor: 'GT Silver Metallic',
    interiorColor: 'Black/Bordeaux Red',
    description: 'The Porsche 911 continues to set the benchmark for sports cars with its iconic design, exhilarating performance, and daily usability.',
    features: ['Sport Chrono Package', 'PASM Sport Suspension', 'Bose Surround Sound', 'Adaptive Sports Seats', 'LED Matrix Headlights'],
    images: [
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg',
      'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg'
    ],
    isFeatured: true,
    isNew: false,
    isOnSale: true,
    discountAmount: 8000
  },
  {
    id: '6',
    make: 'Lexus',
    model: 'ES',
    year: 2023,
    price: 42000,
    mileage: 0,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    exteriorColor: 'Matador Red Mica',
    interiorColor: 'Chateau',
    description: 'The Lexus ES delivers exceptional comfort, refined luxury, and impressive fuel efficiency in an elegantly designed sedan.',
    features: ['Mark Levinson Audio', 'Power Rear Sunshade', 'Triple-Beam LED Headlights', 'Heated/Ventilated Seats', 'Apple CarPlay/Android Auto'],
    images: [
      'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg',
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg',
      'https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg'
    ],
    isFeatured: false,
    isNew: true,
    isOnSale: false
  }
];

export const makes = [...new Set(cars.map(car => car.make))];
export const models = [...new Set(cars.map(car => car.model))];
export const years = [...new Set(cars.map(car => car.year))].sort((a, b) => a - b);
export const fuelTypes = [...new Set(cars.map(car => car.fuelType))];
export const transmissions = [...new Set(cars.map(car => car.transmission))];

export const testimonials = [
  {
    id: '1',
    name: 'Thomas Wilson',
    role: 'Business Owner',
    text: 'The purchasing experience was effortless. The sales team was knowledgeable and helped me find the perfect car for my needs. Highly recommend!',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Marketing Executive',
    text: 'I was impressed by the selection and competitive pricing. Found my dream car within my budget and the process was smooth from start to finish.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 4
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Software Engineer',
    text: 'As a tech enthusiast, I was looking for a vehicle with cutting-edge features. The team guided me through all the options and I couldn\'t be happier with my purchase.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    rating: 5
  }
];