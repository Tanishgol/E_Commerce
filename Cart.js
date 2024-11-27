function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSummaryContainer = document.getElementById('cart-summary');

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartSummaryContainer.innerHTML = '';
        return;
    }

    let cartHTML = `
        <div class="row fw-bold border-bottom pb-2 mb-2">
            <div class="col-md-6">Product</div>
            <div class="col-md-2">Price</div>
            <div class="col-md-2">Quantity</div>
            <div class="col-md-2">Total</div>
        </div>
    `;

    let subtotal = 0;
    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        cartHTML += `
            <div class="row mb-2 py-2 border-bottom">
                <div class="col-md-6">
                    <div class="d-flex align-items-center">
                        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;" class="me-2">
                        ${item.name}
                    </div>
                </div>
                <div class="col-md-2">₹${item.price.toFixed(2)}</div>
                <div class="col-md-2">
                    <div class="input-group input-group-sm" style="width: 100px;">
                        <button class="btn btn-outline-secondary update-quantity" type="button" data-id="${item.id}" data-action="decrease">-</button>
                        <input type="text" class="form-control text-center" value="${item.quantity}" readonly>
                        <button class="btn btn-outline-secondary update-quantity" type="button" data-id="${item.id}" data-action="increase">+</button>
                    </div>
                </div>
                <div class="col-md-2">
                    ₹${itemTotal.toFixed(2)}
                    <button class="btn btn-sm btn-link text-danger remove-item" data-id="${item.id}"><i class="bi bi-trash"></i></button>
                </div>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = cartHTML;

    const tax = subtotal * 0.1; // Assuming 10% tax
    const total = subtotal + tax;

    const summaryHTML = `
        <div class="row justify-content-end">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Order Summary</h5>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Subtotal:</span>
                            <span>₹${subtotal.toFixed(2)}</span>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Tax (10%):</span>
                            <span>₹${tax.toFixed(2)}</span>
                        </div>
                        <div class="d-flex justify-content-between fw-bold">
                            <span>Total:</span>
                            <span>₹${total.toFixed(2)}</span>
                        </div>
                        <button class="btn btn-primary w-100 mt-3" onclick="proceedToCheckout()">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    cartSummaryContainer.innerHTML = summaryHTML;
}

function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
}

function updateCart(productId, action) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
        if (action === 'increase') {
            cart[itemIndex].quantity += 1;
        } else if (action === 'decrease') {
            cart[itemIndex].quantity -= 1;
            if (cart[itemIndex].quantity === 0) {
                cart.splice(itemIndex, 1);
            }
        } else if (action === 'remove') {
            cart.splice(itemIndex, 1);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

function proceedToCheckout() {
    window.location.href = 'billing.html';
}

document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    updateCartCount();

    document.getElementById('cart-items').addEventListener('click', (e) => {
        if (e.target.classList.contains('update-quantity')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const action = e.target.getAttribute('data-action');
            updateCart(productId, action);
        } else if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
            const productId = parseInt(e.target.closest('.remove-item').getAttribute('data-id'));
            updateCart(productId, 'remove');
        }
    });
});