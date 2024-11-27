const products = [
    { id: 1, name: "Lymio Men T-Shirt", price: 599, image: "./Images/Lymio_Men_T-Shirt.jpg" },
    { id: 2, name: "Born to Shine", price: 799, image: "./Images/Born_to_shine.jpg" },
    { id: 3, name: "Pink Kurta Set", price: 1250, image: "./Images/Anarkali_Kurta_with_Palazzo_pink.jpg" },
    { id: 4, name: "Yellow Kurta Set", price: 1350, image: "./Images/Anarkali_Kurta_with_Palazzo_yellow.jpg" },
    { id: 5, name: "Samsung Galaxy S24", price: 120000, image: "./Images/Samsung Galaxy S24 Ultra.jpg" },
    { id: 6, name: "Samsung Watch6", price: 19999, image: "./Images/Samsung Galaxy Watch6.jpg" },
    { id: 7, name: "Apple iPhone 16", price: 150000, image: "./Images/Iphone 16.jpg" },
    { id: 8, name: "Apple AirPods 4", price: 80000, image: "./Images/AirPods 4.jpg" },
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = `
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">₹${product.price.toFixed(2)}</p>
                        <div class="d-flex mt-auto">
                            <a href="#" class="btn btn-info flex-grow-1 me-2">Buy Now</a>
                            <button class="btn btn-warning add-to-cart flex-grow-1" data-id="${product.id}">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCartCount();

    document.getElementById('product-list').addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            alert(`${product.name} added to cart!`);
        }
    });
});