# Food Delivery App - Backend

A Spring Boot REST API for a food delivery application.

## Features

- Restaurant management (CRUD operations)
- Menu item management
- Order processing
- H2 in-memory database for development
- RESTful API endpoints
- CORS configuration for frontend integration

## Technologies Used

- Java 17
- Spring Boot 3.1.5
- Spring Data JPA
- H2 Database
- Lombok
- Maven

## Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.6 or higher

### Running the Application

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The application will start on `http://localhost:8080`

### H2 Console

Access the H2 database console at: `http://localhost:8080/h2-console`

- JDBC URL: `jdbc:h2:mem:fooddeliverydb`
- Username: `sa`
- Password: (leave empty)

## API Endpoints

### Restaurants

- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/{id}` - Get restaurant by ID
- `GET /api/restaurants/search/cuisine?cuisine={cuisine}` - Search by cuisine
- `GET /api/restaurants/search/name?name={name}` - Search by name
- `POST /api/restaurants` - Create a new restaurant
- `PUT /api/restaurants/{id}` - Update a restaurant
- `DELETE /api/restaurants/{id}` - Delete a restaurant

### Menu Items

- `GET /api/menu-items` - Get all menu items
- `GET /api/menu-items/{id}` - Get menu item by ID
- `GET /api/menu-items/restaurant/{restaurantId}` - Get menu items by restaurant
- `GET /api/menu-items/category/{category}` - Get menu items by category
- `POST /api/menu-items` - Create a new menu item
- `PUT /api/menu-items/{id}` - Update a menu item
- `DELETE /api/menu-items/{id}` - Delete a menu item

### Orders

- `GET /api/orders` - Get all orders
- `GET /api/orders/{id}` - Get order by ID
- `GET /api/orders/customer/{email}` - Get orders by customer email
- `POST /api/orders` - Create a new order
- `PATCH /api/orders/{id}/status?status={status}` - Update order status
- `DELETE /api/orders/{id}` - Delete an order

## Sample Data

The application includes sample data that is automatically loaded on startup:
- 3 restaurants (Pizza Palace, Burger Haven, Sushi Express)
- Multiple menu items for each restaurant

## Project Structure

```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/fooddelivery/app/
│   │   │   ├── config/          # Configuration classes
│   │   │   ├── controller/      # REST controllers
│   │   │   ├── dto/             # Data Transfer Objects
│   │   │   ├── model/           # Entity models
│   │   │   ├── repository/      # JPA repositories
│   │   │   └── service/         # Business logic services
│   │   └── resources/
│   │       └── application.properties
│   └── test/
└── pom.xml
```
