import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { getCartCount } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>🍔 FoodExpress</h1>
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/cart" className="cart-link">
            🛒 Cart {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
