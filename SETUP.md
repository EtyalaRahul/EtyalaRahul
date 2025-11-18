# Full-Stack Food Delivery App - Setup Guide

## Overview

This is a complete full-stack food delivery application built with React (frontend) and Spring Boot (backend).

## Prerequisites

Before you begin, ensure you have the following installed:

- **Java 17** or higher
- **Maven 3.6** or higher
- **Node.js 14** or higher
- **npm 6** or higher

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/EtyalaRahul/EtyalaRahul.git
cd EtyalaRahul
```

### 2. Start the Backend

Open a terminal and run:

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

**Backend Features:**
- REST API endpoints
- H2 in-memory database
- Automatic sample data initialization
- CORS enabled for frontend

### 3. Start the Frontend

Open a new terminal and run:

```bash
cd frontend
npm install
npm start
```

The frontend will start on `http://localhost:3000` and automatically open in your browser.

**Frontend Features:**
- React Router for navigation
- Context API for state management
- Axios for API calls
- Responsive design

## Project Structure

```
.
├── backend/                    # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/fooddelivery/app/
│   │   │   │   ├── config/          # Configuration
│   │   │   │   ├── controller/      # REST controllers
│   │   │   │   ├── dto/             # Data Transfer Objects
│   │   │   │   ├── model/           # JPA entities
│   │   │   │   ├── repository/      # Data repositories
│   │   │   │   └── service/         # Business logic
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── pom.xml
│   └── README.md
│
└── frontend/                   # React frontend
    ├── public/
    ├── src/
    │   ├── components/         # Reusable components
    │   ├── context/            # Context providers
    │   ├── pages/              # Page components
    │   ├── services/           # API services
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── README.md
```

## Application Features

### 1. Home Page
- Attractive hero section
- Feature highlights
- Call-to-action button

### 2. Browse Restaurants
- View all available restaurants
- Search restaurants by name
- Filter by cuisine type
- Restaurant cards with details

### 3. Restaurant Menu
- View restaurant details
- Browse menu items
- Add items to cart
- Item quantity selection

### 4. Shopping Cart
- View cart items
- Update quantities
- Remove items
- Calculate totals
- Persistent storage

### 5. Checkout
- Enter delivery information
- Review order summary
- Place order

### 6. Order Confirmation
- Order success page
- Order details display
- Order tracking information

## API Endpoints

### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/{id}` - Get restaurant by ID
- `GET /api/restaurants/search/name?name={name}` - Search by name
- `GET /api/restaurants/search/cuisine?cuisine={cuisine}` - Search by cuisine

### Menu Items
- `GET /api/menu-items` - Get all menu items
- `GET /api/menu-items/restaurant/{restaurantId}` - Get restaurant menu

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/{id}` - Get order by ID
- `GET /api/orders/customer/{email}` - Get customer orders

## Database

The application uses H2 in-memory database for development.

**Access H2 Console:**
- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:fooddeliverydb`
- Username: `sa`
- Password: (leave empty)

## Sample Data

The application automatically loads sample data on startup:

**Restaurants:**
1. Pizza Palace (Italian) - 2 menu items
2. Burger Haven (American) - 2 menu items
3. Sushi Express (Japanese) - 2 menu items

## Building for Production

### Backend

```bash
cd backend
mvn clean package
java -jar target/food-delivery-app-1.0.0.jar
```

### Frontend

```bash
cd frontend
npm run build
```

The build folder will contain the production-ready static files.

## Technology Stack

### Backend
- Java 17
- Spring Boot 3.1.5
- Spring Data JPA
- H2 Database
- Lombok
- Maven

### Frontend
- React 18
- React Router DOM v6
- Axios
- Context API
- CSS3

## Troubleshooting

### Backend Issues

**Port 8080 already in use:**
```bash
# Change port in application.properties
server.port=8081
```

**Maven build fails:**
```bash
mvn clean
mvn install -U
```

### Frontend Issues

**Port 3000 already in use:**
```bash
# Set different port
PORT=3001 npm start
```

**npm install fails:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**CORS errors:**
- Ensure backend is running on port 8080
- Check CORS configuration in `CorsConfig.java`

## Development Tips

1. **Hot Reload:** Both frontend and backend support hot reload during development
2. **Testing:** Use the H2 console to inspect database state
3. **API Testing:** Use tools like Postman or curl to test API endpoints
4. **Debugging:** Enable debug mode in application.properties for detailed logs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for educational purposes.

## Contact

For questions or issues, please open an issue on GitHub.
