import React from 'react'
import './HeroCar.css'

function HeroCar() {
  return (
    <section className="hero-car">
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-pill">Premium Collections</div>
        <h1 className="hero-title">Discover Your Dream Car</h1>
        <p className="hero-subtitle">Explore top models, compare features, and drive home with confidence.</p>
        <div className="hero-actions">
          <button className="btn-primary">Explore Models</button>
          <button className="btn-ghost">Get Offers</button>
        </div>
      </div>
    </section>
  )
}

export default HeroCar