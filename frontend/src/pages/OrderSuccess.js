import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="order-success-page">
        <div className="container">
          <div className="success-card">
            <h2>Order not found</h2>
            <Link to="/restaurants" className="home-btn">
              Back to Restaurants
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-success-page">
      <div className="container">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h1>Order Placed Successfully!</h1>
          <p className="order-id">Order ID: #{order.id}</p>
          
          <div className="order-details">
            <h2>Order Details</h2>
            <div className="detail-row">
              <span>Customer:</span>
              <span>{order.customerName}</span>
            </div>
            <div className="detail-row">
              <span>Email:</span>
              <span>{order.customerEmail}</span>
            </div>
            <div className="detail-row">
              <span>Phone:</span>
              <span>{order.customerPhone}</span>
            </div>
            <div className="detail-row">
              <span>Delivery Address:</span>
              <span>{order.deliveryAddress}</span>
            </div>
            <div className="detail-row">
              <span>Total:</span>
              <span className="total-amount">${order.total.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span>Status:</span>
              <span className="status">{order.status}</span>
            </div>
          </div>

          <div className="success-actions">
            <p>Your order is being prepared and will be delivered soon!</p>
            <Link to="/restaurants" className="continue-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
