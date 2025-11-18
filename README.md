# 🍔 FoodExpress - Full Stack Food Delivery App

A complete full-stack food delivery application built with **React** and **Spring Boot**.

## 🚀 Features

### Frontend (React)
- 🏠 Beautiful landing page with hero section
- 🍕 Browse restaurants with search functionality
- 📋 View detailed restaurant menus
- 🛒 Shopping cart with quantity management
- 💳 Checkout and order placement
- 📦 Order confirmation
- 💾 Cart persistence using localStorage
- 📱 Fully responsive design

### Backend (Spring Boot)
- 🔧 RESTful API architecture
- 🗄️ JPA/Hibernate for database operations
- 🔐 CORS configuration for frontend integration
- 📊 H2 in-memory database
- 🎯 Sample data initialization
- 📝 Comprehensive API endpoints
- 🛡️ Input validation

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=000)  
![React Router](https://img.shields.io/badge/-React%20Router-CA4245?style=flat&logo=react-router&logoColor=fff)  
![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat&logo=axios&logoColor=fff)  
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=fff)  

### Backend
![Spring Boot](https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat&logo=springboot&logoColor=fff)  
![Java](https://img.shields.io/badge/-Java%2017-007396?style=flat&logo=java&logoColor=fff)  
![Maven](https://img.shields.io/badge/-Maven-C71A36?style=flat&logo=apache-maven&logoColor=fff)  
![H2 Database](https://img.shields.io/badge/-H2-0000BB?style=flat&logo=h2&logoColor=fff)  

## 📁 Project Structure

```
food-delivery-app/
├── backend/                 # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/fooddelivery/app/
│   │   │   │   ├── config/          # Configuration classes
│   │   │   │   ├── controller/      # REST controllers
│   │   │   │   ├── dto/             # Data Transfer Objects
│   │   │   │   ├── model/           # Entity models
│   │   │   │   ├── repository/      # JPA repositories
│   │   │   │   └── service/         # Business logic
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── pom.xml
│   └── README.md
│
└── frontend/                # React frontend
    ├── public/
    ├── src/
    │   ├── components/      # Reusable components
    │   ├── context/         # Context providers
    │   ├── pages/           # Page components
    │   ├── services/        # API services
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── README.md
```

## 🚀 Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.6 or higher
- Node.js 14 or higher
- npm 6 or higher

### Running the Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build and run the Spring Boot application:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

The backend will start on `http://localhost:8080`

### Running the Frontend

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

The frontend will start on `http://localhost:3000`

## 📡 API Endpoints

### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/{id}` - Get restaurant by ID
- `GET /api/restaurants/search/cuisine?cuisine={cuisine}` - Search by cuisine
- `GET /api/restaurants/search/name?name={name}` - Search by name

### Menu Items
- `GET /api/menu-items` - Get all menu items
- `GET /api/menu-items/restaurant/{restaurantId}` - Get menu items by restaurant

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/{id}` - Get order by ID

## 🎯 Features Walkthrough

1. **Home Page**: Landing page with attractive hero section and features
2. **Restaurants**: Browse all available restaurants with search
3. **Restaurant Detail**: View menu items and add to cart
4. **Cart**: Review items, update quantities, and proceed to checkout
5. **Checkout**: Enter delivery details and place order
6. **Order Success**: Confirmation page with order details

## 🗄️ Database

The application uses H2 in-memory database with sample data:
- 3 restaurants (Pizza Palace, Burger Haven, Sushi Express)
- Multiple menu items per restaurant

Access H2 Console: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:fooddeliverydb`
- Username: `sa`
- Password: (empty)

## 📝 Sample Data

The backend automatically loads sample data on startup including:
- Pizza Palace (Italian cuisine)
- Burger Haven (American cuisine)
- Sushi Express (Japanese cuisine)

Each restaurant comes with multiple menu items.

## 🎨 Design Features

- Modern gradient-based UI
- Smooth animations and transitions
- Responsive design for all devices
- Clean and intuitive user interface
- Persistent shopping cart

## 📚 Learn More

- [Backend README](./backend/README.md) - Detailed backend documentation
- [Frontend README](./frontend/README.md) - Detailed frontend documentation

---

## 👨‍💻 About Me  

🎓 Engineering Student at **Koneru Lakshmaiah Education Foundation, Vijayawada**  
💻 Passionate about building **scalable web applications**  
🌱 Always excited to learn & contribute to **Open-Source projects**  

## ✨ Fun Fact  
⚡ *Built this app with a hot cup of coffee ☕*
