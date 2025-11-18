import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const restaurantService = {
  getAllRestaurants: () => api.get('/restaurants'),
  getRestaurantById: (id) => api.get(`/restaurants/${id}`),
  searchByCuisine: (cuisine) => api.get(`/restaurants/search/cuisine?cuisine=${cuisine}`),
  searchByName: (name) => api.get(`/restaurants/search/name?name=${name}`),
};

export const menuItemService = {
  getAllMenuItems: () => api.get('/menu-items'),
  getMenuItemById: (id) => api.get(`/menu-items/${id}`),
  getMenuItemsByRestaurant: (restaurantId) => api.get(`/menu-items/restaurant/${restaurantId}`),
};

export const orderService = {
  getAllOrders: () => api.get('/orders'),
  getOrderById: (id) => api.get(`/orders/${id}`),
  getOrdersByCustomerEmail: (email) => api.get(`/orders/customer/${email}`),
  createOrder: (orderData) => api.post('/orders', orderData),
  updateOrderStatus: (id, status) => api.patch(`/orders/${id}/status?status=${status}`),
};

export default api;
