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
2. Navigate into the project directory:
    ```bash
    cd E_Commerce
    ```
3. Open the `index.html` file in your browser to start the application.

## Usage

1. Browse products on the **Home Page** and add items to your cart.
2. Review your cart on the **Shopping Cart Page**, where you can:
   - Update quantities or remove items.
   - View the **Order Summary** with Subtotal, Tax, and Total.
3. Click **Proceed to Checkout** to go to the **Checkout Page**.
4. On the **Checkout Page**:
   - Fill in your billing information.
   - Review the **Order Summary**.
   - Enter the promo code **DISCOUNT10** for a 10% discount (if applicable).
   - Select your preferred payment method (Credit Card, Debit Card, UPI, or Cash on Delivery).
5. Submit your order to view the **Order Confirmation Page**, which displays:
   - Order Number
   - Order Date
   - Total Amount
   - Payment Method
   - Detailed breakdown of ordered items and addresses.
   
---

## Screenshots

### Home Page
_Showcasing products with add-to-cart functionality._  
![Home Page Screenshot](https://github.com/user-attachments/assets/9609df32-f86b-4bb1-813a-d9305db83dbf)

### Shopping Cart Page
_Cart summary with options to update quantities or remove items._  
![Shopping Cart Screenshot](https://github.com/user-attachments/assets/f533bb18-6b13-4af2-9039-eee85acbf67d)


### Checkout Page (billing.html)
_Enter billing information, apply promo codes, and choose a payment method._  
![Billing Page Screenshot](https://github.com/user-attachments/assets/c682cd74-fe0c-4d18-99cf-4781dcd81075)


### Order Confirmation Page
_View detailed order summary, billing, and shipping information._  
![Order Confirmation Page Screenshot](https://github.com/user-attachments/assets/70b8e062-f3f1-4b21-abcf-594603ed5f44)


---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contributors

- **Tanishgol** - _Initial development_
- **Rushita Gondaliya** - _Mentor and Guidance_

A heartfelt thanks to my mentor **A heartfelt thanks to my mentor **[Rushita Gondaliya](https://www.linkedin.com/in/rushita-gondaliya-588a0b258/)** for her valuable guidance and support throughout the project.** for their valuable guidance and support throughout the project.

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Tanishgol/E_Commerce/issues).

