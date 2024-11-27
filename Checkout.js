document.addEventListener('DOMContentLoaded', function () {
    // Retrieve order data from localStorage
    const orderData = JSON.parse(localStorage.getItem('orderData'));

    if (!orderData) {
        console.error('No order data found in localStorage');
        document.body.innerHTML = '<div class="container mt-5"><h1>Error: No order data found</h1><p>Please return to the cart and complete your order.</p></div>';
        return;
    }

    // Populate order summary
    document.getElementById('orderNumber').textContent = orderData.orderNumber;
    document.getElementById('orderDate').textContent = new Date(orderData.date).toLocaleDateString();
    document.getElementById('orderTotal').textContent = `₹${orderData.order.total.toFixed(2)}`;
    document.getElementById('paymentMethod').textContent = orderData.order.paymentMethod;

    // Populate order items
    const orderItemsElement = document.getElementById('orderItems');
    orderData.order.items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name} x ${item.quantity}</td>
            <td class="text-end">₹${(item.price * item.quantity).toFixed(2)}</td>
        `;
        orderItemsElement.appendChild(row);
    });

    // Populate totals
    document.getElementById('subtotal').textContent = `₹${orderData.order.subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `₹${orderData.order.tax.toFixed(2)}`;
    document.getElementById('total').textContent = `₹${orderData.order.total.toFixed(2)}`;

    // Populate billing address
    const billingAddressString = `
        ${orderData.customer.firstName} ${orderData.customer.lastName}<br>
        ${orderData.customer.billingAddress.address}<br>
        ${orderData.customer.billingAddress.state}, ${orderData.customer.billingAddress.zip}<br>
        ${orderData.customer.billingAddress.country}
    `;
    document.getElementById('billingAddress').innerHTML = billingAddressString;

    // Populate shipping address (static)
    const shippingAddressString = `
        ${orderData.customer.firstName} ${orderData.customer.lastName}<br>
        ${orderData.customer.shippingAddress.address}<br>
        ${orderData.customer.shippingAddress.city}, ${orderData.customer.shippingAddress.state} ${orderData.customer.shippingAddress.zip}<br>
        ${orderData.customer.shippingAddress.country}
    `;
    document.getElementById('shippingAddress').innerHTML = shippingAddressString;

    // Clear the orderData from localStorage after displaying it
    localStorage.removeItem('orderData');
});