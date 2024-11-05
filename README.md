# E-Commerce Furniture Project

## Overview
This project is a React-based e-commerce web application that features an interactive and dynamic shopping experience. Users can explore different themed rooms (Living Room, Bedroom, Kitchen, and Workplace), browse products that match the room's background, and proceed through the shopping and checkout process with a smooth UI. The project includes a day/night mode, a mock checkout experience, and showcases product variants.

## Features
- **Room Pages**: Four room-themed pages (Living Room, Bedroom, Kitchen, Workplace), each with a unique background and matching products.
- **Day/Night Toggle**: Switches the room background to reflect day or night mode.
- **Product Filtering**: Product data is stored as JSON on GitHub and fetched as an API. Selecting a product type on a room page filters and displays relevant products.
- **Product Variants**: Each product has variants based on color, each with a unique ID for cart management.
- **Shopping Cart (Bag)**: Add products to the cart with adjustable quantities (default of 1, maximum of 5).
- **Bag Review Page**: Shows a summary of items in the cart, with options to remove items and displays an estimated total.
- **Checkout Page**: Contains a form to collect delivery information. Displays a generated bill number and a final cost summary, including images of purchased products.
- **Mock Payment Process**: Includes a loader simulating "checking payment status" and displays an "Order Successful" alert after 3.5 seconds.
- **Responsive Design**: Built with Tailwind CSS for a seamless experience on all devices.
- **State Management**: Utilizes Redux and Redux Toolkit for managing cart and user data.
- **Smooth Navigation**: React Router DOM for routing and navigation.
- **Additional Libraries**: Includes React Icons and React Spinners for UI elements.

## Tech Stack
- **React.js**: Frontend library for building the user interface.
- **Tailwind CSS**: For styling and ensuring a responsive design.
- **Redux & Redux Toolkit**: For state management of the cart and customer data.
- **React Router DOM**: For routing and navigation between pages.
- **React Icons & React Spinners**: Used for visual enhancements and loader animations.

## How It Works
1. **Navigation**: Users can navigate between different room pages and view products based on the room's theme.
2. **Product Page**: Clicking a product type filters products and displays them on the Products page.
3. **Cart Management**: Users can add products to the cart, adjust quantities, and review their selections.
4. **Checkout**: The form collects delivery details, and submitting displays a bill summary.
5. **Mock Payment Process**: Shows a loader with a "checking payment status" message before confirming the order.
6. **Order Confirmation**: An "Order Successful" alert is displayed, and the cart and customer data are cleared.

## Future Enhancements
1. **Local Storage Integration**: Saves cart and customer data in local storage for data persistence.
2. Add more room pages and products.