import React from 'react'
import './CarsSection.css'

const cars = [
  {
    id: 1,
    name: 'Tesla Model S Plaid',
    image: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg',
    price: 129990,
    year: 2024,
    mileage: '0 km',
    fuel: 'Electric',
    transmission: 'Auto',
    rating: 4.9
  },
  {
    id: 2,
    name: 'BMW M4 Competition',
    image: 'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg',
    price: 86990,
    year: 2023,
    mileage: '6,200 km',
    fuel: 'Petrol',
    transmission: 'Auto',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Audi RS7 Sportback',
    image: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg',
    price: 104990,
    year: 2024,
    mileage: '2,300 km',
    fuel: 'Petrol',
    transmission: 'Auto',
    rating: 4.8
  },
  {
    id: 4,
    name: 'Porsche 911 Carrera',
    image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
    price: 119990,
    year: 2022,
    mileage: '9,500 km',
    fuel: 'Petrol',
    transmission: 'PDK',
    rating: 4.9
  },
  {
    id: 5,
    name: 'Mercedes AMG GT',
    image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg',
    price: 134990,
    year: 2021,
    mileage: '15,200 km',
    fuel: 'Petrol',
    transmission: 'Auto',
    rating: 4.6
  },
  {
    id: 6,
    name: 'Lamborghini Huracán',
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg',
    price: 269990,
    year: 2020,
    mileage: '7,800 km',
    fuel: 'Petrol',
    transmission: 'Auto',
    rating: 4.9
  },
  {
    id: 7,
    name: 'Range Rover Vogue',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
    price: 99990,
    year: 2023,
    mileage: '4,500 km',
    fuel: 'Diesel',
    transmission: 'Auto',
    rating: 4.6
  },
  {
    id: 8,
    name: 'Toyota Supra GR',
    image: 'https://images.pexels.com/photos/106936/pexels-photo-106936.jpeg',
    price: 58990,
    year: 2024,
    mileage: '1,100 km',
    fuel: 'Petrol',
    transmission: 'Auto',
    rating: 4.7
  }
]

function StarRating({ rating }){
  const fullStars = Math.floor(rating)
  const hasHalf = rating - fullStars >= 0.5
  const stars = []
  for (let i = 0; i < 5; i++){
    if (i < fullStars){
      stars.push(<span key={i} className="star full">★</span>)
    } else if (i === fullStars && hasHalf){
      stars.push(<span key={i} className="star half">☆</span>)
    } else {
      stars.push(<span key={i} className="star empty">☆</span>)
    }
  }
  return <div className="stars">{stars}</div>
}

function CarsSection() {
  return (
    <section className="cars-section">
      <div className="cars-header">
        <div className="headline-pill">Top Picks</div>
        <h2>Featured Car Models</h2>
        <p>Hand-picked selection of the finest cars with best-in-class performance and luxury.</p>
      </div>

      <div className="cars-grid">
        {cars.map((car) => (
          <article key={car.id} className="car-card">
            {car.year >= 2023 && <span className="badge">New</span>}
            <div className="image-wrap">
              <img src={car.image} alt={car.name} loading="lazy" />
            </div>
            <div className="car-body">
              <h3 className="car-name">{car.name}</h3>
              <div className="car-meta">
                <span>{car.year}</span>
                <span>•</span>
                <span>{car.mileage}</span>
                <span>•</span>
                <span>{car.fuel}</span>
                <span>•</span>
                <span>{car.transmission}</span>
              </div>
              <div className="car-bottom">
                <div className="price">
                  <span className="currency">$</span>
                  {car.price.toLocaleString()}
                </div>
                <StarRating rating={car.rating} />
              </div>
              <div className="actions">
                <button className="btn-outline">View Details</button>
                <button className="btn-solid">Book Now</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CarsSection