import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { restaurantService, menuItemService } from '../services/api';
import { useCart } from '../context/CartContext';
import './RestaurantDetail.css';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchRestaurantDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchRestaurantDetails = async () => {
    try {
      setLoading(true);
      const [restaurantRes, menuRes] = await Promise.all([
        restaurantService.getRestaurantById(id),
        menuItemService.getMenuItemsByRestaurant(id),
      ]);
      setRestaurant(restaurantRes.data);
      setMenuItems(menuRes.data);
      setError(null);
    } catch (err) {
      setError('Failed to load restaurant details.');
      console.error('Error fetching restaurant details:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (menuItem) => {
    addToCart(menuItem);
    alert(`${menuItem.name} added to cart!`);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error || !restaurant) {
    return <div className="error">{error || 'Restaurant not found'}</div>;
  }

  return (
    <div className="restaurant-detail">
      <div className="restaurant-header">
        <img
          src={restaurant.imageUrl || 'https://via.placeholder.com/1200x300?text=Restaurant'}
          alt={restaurant.name}
          className="restaurant-banner"
        />
        <div className="restaurant-info-overlay">
          <div className="container">
            <h1>{restaurant.name}</h1>
            <p className="cuisine">{restaurant.cuisine}</p>
            <p className="description">{restaurant.description}</p>
            <div className="meta-info">
              <span>⭐ {restaurant.rating}</span>
              <span>🕐 {restaurant.deliveryTime} min</span>
              <span>🚚 ${restaurant.deliveryFee} delivery</span>
              <span>📞 {restaurant.phone}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="menu-section">
          <h2>Menu</h2>
          {menuItems.length === 0 ? (
            <p className="no-items">No menu items available.</p>
          ) : (
            <div className="menu-grid">
              {menuItems.map((item) => (
                <div key={item.id} className="menu-item-card">
                  <img
                    src={item.imageUrl || 'https://via.placeholder.com/300x200?text=Food'}
                    alt={item.name}
                    className="menu-item-image"
                  />
                  <div className="menu-item-info">
                    <h3>{item.name}</h3>
                    <p className="menu-item-description">{item.description}</p>
                    <div className="menu-item-footer">
                      <span className="price">${item.price.toFixed(2)}</span>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(item)}
                        disabled={!item.available}
                      >
                        {item.available ? 'Add to Cart' : 'Unavailable'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
