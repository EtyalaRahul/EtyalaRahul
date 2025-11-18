import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Order Your Favorite Food Online</h1>
          <p>Fast delivery from the best restaurants in your area</p>
          <Link to="/restaurants" className="cta-button">
            Browse Restaurants
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose FoodExpress?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast Delivery</h3>
              <p>Get your food delivered in 30 minutes or less</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍕</div>
              <h3>Wide Selection</h3>
              <p>Choose from hundreds of restaurants</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Easy Payment</h3>
              <p>Simple and secure checkout process</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Quality Food</h3>
              <p>Only the best restaurants on our platform</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
