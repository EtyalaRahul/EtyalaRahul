# Food Delivery App - Frontend

A React-based frontend for the food delivery application.

## Features

- Browse restaurants
- View restaurant menus
- Add items to cart
- Place orders
- Responsive design
- Shopping cart with persistent storage (localStorage)
- Order confirmation

## Technologies Used

- React 18
- React Router DOM v6
- Axios for API calls
- Context API for state management
- CSS3 for styling

## Getting Started

### Prerequisites

- Node.js 14 or higher
- npm 6 or higher

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will open in your browser at `http://localhost:3000`

### Build for Production

To create a production build:

```bash
npm run build
```

The optimized build will be created in the `build` folder.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.js
│   │   └── Header.css
│   ├── context/            # Context providers
│   │   └── CartContext.js
│   ├── pages/              # Page components
│   │   ├── Home.js
│   │   ├── Restaurants.js
│   │   ├── RestaurantDetail.js
│   │   ├── Cart.js
│   │   ├── Checkout.js
│   │   └── OrderSuccess.js
│   ├── services/           # API services
│   │   └── api.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Pages

### Home
Landing page with hero section and feature highlights.

### Restaurants
Browse all available restaurants with search functionality.

### Restaurant Detail
View a specific restaurant's menu and add items to cart.

### Cart
Review cart items, update quantities, and proceed to checkout.

### Checkout
Enter delivery information and place an order.

### Order Success
Order confirmation page with order details.

## State Management

The application uses React Context API for global state management:

- **CartContext**: Manages shopping cart state
  - Add items to cart
  - Remove items from cart
  - Update item quantities
  - Calculate totals
  - Persist cart to localStorage

## API Integration

The frontend communicates with the Spring Boot backend through REST APIs:

- Base URL: `http://localhost:8080/api`
- Services: restaurantService, menuItemService, orderService

## Styling

- Custom CSS with responsive design
- Mobile-first approach
- Gradient themes
- Smooth transitions and hover effects
