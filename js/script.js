// Car data
const cars = [
    {
        id: 1,
        name: 'BMW 5 Series',
        price: 65000,
        year: 2023,
        mileage: '0',
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        image: 'images/bmw-5.jpg'
    },
    {
        id: 2,
        name: 'Mercedes-Benz E-Class',
        price: 72000,
        year: 2023,
        mileage: '0',
        transmission: 'Automatic',
        fuelType: 'Hybrid',
        image: 'images/mercedes-e.jpg'
    },
    {
        id: 3,
        name: 'Audi A6',
        price: 58000,
        year: 2022,
        mileage: '5,200',
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        image: 'images/audi-a6.jpg'
    },
    {
        id: 4,
        name: 'Tesla Model 3',
        price: 49000,
        year: 2023,
        mileage: '1,200',
        transmission: 'Automatic',
        fuelType: 'Electric',
        image: 'images/tesla-3.jpg'
    },
    {
        id: 5,
        name: 'Lexus ES',
        price: 42000,
        year: 2023,
        mileage: '0',
        transmission: 'Automatic',
        fuelType: 'Hybrid',
        image: 'images/lexus-es.jpg'
    },
    {
        id: 6,
        name: 'Porsche 911',
        price: 120000,
        year: 2022,
        mileage: '3,600',
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        image: 'images/porsche-911.jpg'
    }
];

// Format price with commas and dollar sign
function formatPrice(price) {
    return '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Create car cards
function createCarCards() {
    const carGrid = document.getElementById('carGrid');
    
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <div class="car-details">
                <h3 class="car-title">${car.year} ${car.name}</h3>
                <p class="car-price">${formatPrice(car.price)}</p>
                <div class="car-specs">
                    <span>Mileage: ${car.mileage}</span>
                    <span>Fuel: ${car.fuelType}</span>
                    <span>Transmission: ${car.transmission}</span>
                </div>
            </div>
        `;
        
        carGrid.appendChild(carCard);
    });
}

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu after clicking a link
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will contact you soon.');
        this.reset();
    });
}

// Initialize car cards when the page loads
document.addEventListener('DOMContentLoaded', createCarCards);