const taxRate = 0.1; // 10% tax rate
let subtotal = 0;
let total = 0;
let tax = 0;

// Static shipping address
const staticShippingAddress = {
    address: "123 Shipping St",
    city: "Shipville",
    state: "CA",
    zip: "12345",
    country: "United States"
};

function updateOrderSummary() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const orderItemsElement = document.getElementById('orderItems');
    orderItemsElement.innerHTML = '';

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${item.name} x ${item.quantity}</td>
                    <td>₹${(item.price * item.quantity).toFixed(2)}</td>
                `;
        orderItemsElement.appendChild(row);
    });

    subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    tax = subtotal * taxRate;
    total = subtotal + tax;

    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `₹${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
}

function displayShippingAddress() {
    const shippingAddressElement = document.getElementById('shippingAddress');
    shippingAddressElement.innerHTML = `
                ${staticShippingAddress.address}<br>
                ${staticShippingAddress.city}, ${staticShippingAddress.state} ${staticShippingAddress.zip}<br>
                ${staticShippingAddress.country}
            `;
}

document.getElementById('applyPromo').addEventListener('click', function () {
    const promoCode = document.getElementById('promo').value.trim().toUpperCase();
    if (promoCode === 'DISCOUNT10') {
        total *= 0.9; // Apply 10% discount
        document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
        alert('Promo code applied successfully!');
    } else {
        alert('Invalid promo code.');
    }
});

document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderData = {
        orderNumber: Math.floor(Math.random() * 1000000),
        date: new Date().toISOString(),
        customer: {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            billingAddress: {
                address: formData.get('billingAddress'),
                country: formData.get('billingCountry'),
                state: formData.get('billingState'),
                zip: formData.get('billingZip')
            },
            shippingAddress: staticShippingAddress
        },
        order: {
            items: JSON.parse(localStorage.getItem('cart')) || [],
            subtotal: subtotal,
            tax: tax,
            total: total,
            paymentMethod: formData.get('paymentMethod')
        }
    };

    // Save the order data to localStorage
    localStorage.setItem('orderData', JSON.stringify(orderData));

    // Clear the cart
    localStorage.removeItem('cart');

    // Redirect to the checkout confirmation page
    window.location.href = 'checkout.html';
});

// Initialize the order summary and display shipping address
updateOrderSummary();
displayShippingAddress();