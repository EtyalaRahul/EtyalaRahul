import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { restaurantService } from '../services/api';
import './Restaurants.css';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      const response = await restaurantService.getAllRestaurants();
      setRestaurants(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load restaurants. Please try again later.');
      console.error('Error fetching restaurants:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      fetchRestaurants();
      return;
    }
    
    try {
      setLoading(true);
      const response = await restaurantService.searchByName(searchTerm);
      setRestaurants(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to search restaurants.');
      console.error('Error searching restaurants:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading restaurants...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="restaurants-page">
      <div className="container">
        <div className="page-header">
          <h1>Our Restaurants</h1>
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>

        <div className="restaurants-grid">
          {restaurants.length === 0 ? (
            <p className="no-results">No restaurants found.</p>
          ) : (
            restaurants.map((restaurant) => (
              <Link
                key={restaurant.id}
                to={`/restaurant/${restaurant.id}`}
                className="restaurant-card"
              >
                <img
                  src={restaurant.imageUrl || 'https://via.placeholder.com/300x200?text=Restaurant'}
                  alt={restaurant.name}
                  className="restaurant-image"
                />
                <div className="restaurant-info">
                  <h3>{restaurant.name}</h3>
                  <p className="cuisine">{restaurant.cuisine}</p>
                  <p className="description">{restaurant.description}</p>
                  <div className="restaurant-meta">
                    <span className="rating">⭐ {restaurant.rating}</span>
                    <span className="delivery-time">🕐 {restaurant.deliveryTime} min</span>
                    <span className="delivery-fee">🚚 ${restaurant.deliveryFee}</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
