package com.fooddelivery.app.config;

import com.fooddelivery.app.model.MenuItem;
import com.fooddelivery.app.model.Restaurant;
import com.fooddelivery.app.repository.MenuItemRepository;
import com.fooddelivery.app.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private MenuItemRepository menuItemRepository;

    @Override
    public void run(String... args) throws Exception {
        if (restaurantRepository.count() == 0) {
            initializeData();
        }
    }

    private void initializeData() {
        // Restaurant 1: Pizza Palace
        Restaurant pizzaPalace = new Restaurant();
        pizzaPalace.setName("Pizza Palace");
        pizzaPalace.setAddress("123 Main St, Downtown");
        pizzaPalace.setPhone("555-0101");
        pizzaPalace.setCuisine("Italian");
        pizzaPalace.setDescription("Authentic Italian pizzas with fresh ingredients");
        pizzaPalace.setImageUrl("https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400");
        pizzaPalace.setRating(4.5);
        pizzaPalace.setDeliveryTime(30);
        pizzaPalace.setDeliveryFee(5.0);
        pizzaPalace = restaurantRepository.save(pizzaPalace);

        MenuItem margherita = new MenuItem();
        margherita.setName("Margherita Pizza");
        margherita.setDescription("Classic pizza with tomato sauce, mozzarella, and basil");
        margherita.setPrice(12.99);
        margherita.setCategory("Pizza");
        margherita.setImageUrl("https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300");
        margherita.setAvailable(true);
        margherita.setRestaurant(pizzaPalace);
        menuItemRepository.save(margherita);

        MenuItem pepperoni = new MenuItem();
        pepperoni.setName("Pepperoni Pizza");
        pepperoni.setDescription("Loaded with pepperoni and extra cheese");
        pepperoni.setPrice(14.99);
        pepperoni.setCategory("Pizza");
        pepperoni.setImageUrl("https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300");
        pepperoni.setAvailable(true);
        pepperoni.setRestaurant(pizzaPalace);
        menuItemRepository.save(pepperoni);

        // Restaurant 2: Burger Haven
        Restaurant burgerHaven = new Restaurant();
        burgerHaven.setName("Burger Haven");
        burgerHaven.setAddress("456 Oak Ave, Midtown");
        burgerHaven.setPhone("555-0102");
        burgerHaven.setCuisine("American");
        burgerHaven.setDescription("Gourmet burgers and fresh-cut fries");
        burgerHaven.setImageUrl("https://images.unsplash.com/photo-1550547660-d9450f859349?w=400");
        burgerHaven.setRating(4.7);
        burgerHaven.setDeliveryTime(25);
        burgerHaven.setDeliveryFee(4.0);
        burgerHaven = restaurantRepository.save(burgerHaven);

        MenuItem classicBurger = new MenuItem();
        classicBurger.setName("Classic Burger");
        classicBurger.setDescription("Beef patty with lettuce, tomato, and special sauce");
        classicBurger.setPrice(9.99);
        classicBurger.setCategory("Burgers");
        classicBurger.setImageUrl("https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300");
        classicBurger.setAvailable(true);
        classicBurger.setRestaurant(burgerHaven);
        menuItemRepository.save(classicBurger);

        MenuItem cheeseBurger = new MenuItem();
        cheeseBurger.setName("Cheese Burger");
        cheeseBurger.setDescription("Double beef patty with cheddar cheese");
        cheeseBurger.setPrice(11.99);
        cheeseBurger.setCategory("Burgers");
        cheeseBurger.setImageUrl("https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300");
        cheeseBurger.setAvailable(true);
        cheeseBurger.setRestaurant(burgerHaven);
        menuItemRepository.save(cheeseBurger);

        // Restaurant 3: Sushi Express
        Restaurant sushiExpress = new Restaurant();
        sushiExpress.setName("Sushi Express");
        sushiExpress.setAddress("789 Elm St, Uptown");
        sushiExpress.setPhone("555-0103");
        sushiExpress.setCuisine("Japanese");
        sushiExpress.setDescription("Fresh sushi and authentic Japanese cuisine");
        sushiExpress.setImageUrl("https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400");
        sushiExpress.setRating(4.8);
        sushiExpress.setDeliveryTime(35);
        sushiExpress.setDeliveryFee(6.0);
        sushiExpress = restaurantRepository.save(sushiExpress);

        MenuItem californiaRoll = new MenuItem();
        californiaRoll.setName("California Roll");
        californiaRoll.setDescription("Crab, avocado, and cucumber roll");
        californiaRoll.setPrice(8.99);
        californiaRoll.setCategory("Sushi");
        californiaRoll.setImageUrl("https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300");
        californiaRoll.setAvailable(true);
        californiaRoll.setRestaurant(sushiExpress);
        menuItemRepository.save(californiaRoll);

        MenuItem salmonNigiri = new MenuItem();
        salmonNigiri.setName("Salmon Nigiri");
        salmonNigiri.setDescription("Fresh salmon over pressed rice");
        salmonNigiri.setPrice(10.99);
        salmonNigiri.setCategory("Sushi");
        salmonNigiri.setImageUrl("https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300");
        salmonNigiri.setAvailable(true);
        salmonNigiri.setRestaurant(sushiExpress);
        menuItemRepository.save(salmonNigiri);
    }
}
