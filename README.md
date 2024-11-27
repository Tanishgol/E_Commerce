# 🛒 E-commerce Website

An e-commerce website with essential features for browsing products, managing a cart, and completing purchases. This project is built entirely using client-side technologies, providing a simple yet functional shopping experience.

---

## Features 🎉

### Home Page (index.html) 🏠
- Displays a list of products with images, names, and prices.
- Allows users to add items to the cart.
- Shows a cart icon with the current number of items in the cart.
- Uses client-side JavaScript to manage the cart in **localStorage**.

### Shopping Cart Page (cart.html) 🛒
- Lists all items in the cart with their details.
- Allows users to update quantities or remove items.
- Displays an order summary including:
  - Subtotal 🧾
  - Tax 💰
  - Total amount 💵
- Provides a "Proceed to Checkout" button.

### Checkout Page (billing.html) 💳
- Collects billing information from the user.
- Displays a static shipping address.
- Shows an order summary with:
  - Product details 📝
  - Totals 🧾
- Offers a promo code input with a 10% discount for the code **"DISCOUNT10"** 🎁.
- Supports multiple payment methods:
  - Credit Card 💳
  - Debit Card 💳
  - UPI 📲
  - Cash on Delivery 💵
- Saves the submitted order to **localStorage**.

### Order Confirmation Page (checkout.html) ✅
- Displays order details, including:
  - Order number 🔢
  - Date 📅
  - Total amount 💰
  - Payment method 💳
- Shows a detailed breakdown of ordered items.
- Includes both billing and shipping addresses.

---

## General Features
- Responsive design using **Bootstrap** 🎨.
- Client-side cart management via **localStorage** 🛒.
- Streamlined checkout process without server-side integration 🚀.
- Basic promo code functionality for discounts 🎁.
- Simulated order processing and confirmation ✅.

---

## Technology Stack 💻
- **HTML5**: For building the structure of the website.
- **CSS3** (with Bootstrap): For responsive and user-friendly design.
- **JavaScript**: For dynamic functionality and managing cart operations.
- **localStorage**: For storing cart and order data client-side.

---

## How to Use 🚀
1. Clone the repository:
   ```bash
    git clone https://github.com/Tanishgol/E_Commerce.git
