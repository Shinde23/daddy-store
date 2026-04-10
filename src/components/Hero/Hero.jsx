import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container fade-in">
        <div className="hero-content">
          <span className="badge">New Arrivals 2026</span>
          <h1 className="hero-title">
            Elevate Your <br />
            <span className="text-gradient">Everyday Aesthetics.</span>
          </h1>
          <p className="hero-subtitle">
            Discover a curated collection of premium tech, minimalist wearables, and modern lifestyle essentials designed to inspire.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg">Explore Collection</button>
            <button className="btn btn-secondary btn-lg">View Offers</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
