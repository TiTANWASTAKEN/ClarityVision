import React from 'react';
import './Hero.css'; // Optional for styling

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">See the World Clearly with Clarity Vision</h1>
          <p className="hero-description">
            Color blindness affects approximately 8% of men and 0.5% of women worldwide. It can make everyday tasks challenging,
            especially when browsing websites. Clarity Vision helps users with Protanopia, Deuteranopia, and Tritanopia see content
            clearly by applying color correction filters. Start seeing the web in full color today.
          </p>
          <a href="/learn-more" className="hero-btn">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
