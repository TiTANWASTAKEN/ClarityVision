import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <h2 className="features-title">Key Features of Clarity Vision</h2>
      <div className="features-grid">
        <div className="feature-item">
          <img src="/images/filter-icon.png" alt="Color Filters" className="feature-icon" />
          <h3>Color Correction Filters</h3>
          <p>
            Our extension provides color correction filters for Protanopia, Deuteranopia, and Tritanopia, making it easier to see content clearly.
          </p>
        </div>
        <div className="feature-item">
          <img src="/images/persist-icon.png" alt="Persistent Filters" className="feature-icon" />
          <h3>Persistent Filters</h3>
          <p>
            The filters stay applied even after page reloads or browser restarts, thanks to Chrome's sync storage.
          </p>
        </div>
        <div className="feature-item">
          <img src="/images/accessibility-icon.png" alt="Accessibility" className="feature-icon" />
          <h3>Enhanced Accessibility</h3>
          <p>
            Designed with accessibility in mind, Clarity Vision enhances the browsing experience for color-blind users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
