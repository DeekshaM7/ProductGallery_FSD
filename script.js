document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const addButton = document.getElementById('addButton');
    const searchInput = document.getElementById('searchInput');

    const products = [
        { name: 'Wireless Headphones', description: 'High-quality over-ear wireless headphones with noise-cancellation', price: 125, image: 'images/image1.jpg' },
        { name: 'Smartphone', description: 'Latest model smartphone with advanced features and high-resolution camera', price: 999, image: 'images/image2.jpeg' },
        { name: 'Laptop', description: 'Lightweight and powerful laptop with a long battery life', price: 1500, image: 'images/image3.jpeg' },
        { name: 'Smartwatch', description: 'Wearable smartwatch with fitness tracking and notifications', price: 199, image: 'images/image4.jpg' },
        { name: 'Bluetooth Speaker', description: 'Portable Bluetooth speaker with excellent sound quality.', price: 70, image: 'images/image5.jpeg' },
        { name: 'Fitness Tracker', description: 'Wearable fitness tracker with heart rate monitoring and sleep tracking.', price: 80, image: 'images/image6.jpeg' },
        { name: 'Wireless Charger', description: 'Fast wireless charger compatible with various devices.', price: 40, image: 'images/image7.jpeg' },
        { name: 'Noise-Cancelling Earbuds', description: 'Comfortable noise-cancelling earbuds with excellent sound quality', price: 130, image: 'images/image8.jpeg' },
        { name: 'Electric Toothbrush', description: 'Advanced electric toothbrush with multiple cleaning modes', price: 60, image: 'images/image9.jpeg' }
    ];

    function renderProducts() {
        productGrid.innerHTML = '';
        products.forEach((product, index) => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="Product Image">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>$${product.price}</strong></p>
                <button class="delete" data-index="${index}">Delete</button>
            `;
            productElement.querySelector('img').addEventListener('click', () => editProduct(index));
            productElement.querySelector('.delete').addEventListener('click', () => deleteProduct(index));
            productGrid.appendChild(productElement);
        });
    }

    function addProduct(product) {
        products.push(product);
        renderProducts();
    }

    function editProduct(index) {
        const product = products[index];
        const newName = prompt('Enter new name', product.name);
        const newDescription = prompt('Enter new description', product.description);
        const newPrice = prompt('Enter new price', product.price);

        if (newName && newDescription && newPrice) {
            products[index] = { ...product, name: newName, description: newDescription, price: newPrice };
            renderProducts();
        }
    }

    function deleteProduct(index) {
        products.splice(index, 1);
        renderProducts();
    }

    function searchProducts(query) {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
        renderFilteredProducts(filteredProducts);
    }

    function renderFilteredProducts(filteredProducts) {
        productGrid.innerHTML = '';
        filteredProducts.forEach((product, index) => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="Product Image">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>$${product.price}</strong></p>
                <button class="delete" data-index="${index}">Delete</button>
            `;
            productElement.querySelector('img').addEventListener('click', () => editProduct(index));
            productElement.querySelector('.delete').addEventListener('click', () => deleteProduct(index));
            productGrid.appendChild(productElement);
        });
    }

    addButton.addEventListener('click', () => {
        const name = prompt('Enter product name');
        const description = prompt('Enter product description');
        const price = prompt('Enter product price');
        const image = prompt('Enter product image URL');

        if (name && description && price && image) {
            addProduct({ name, description, price, image });
        } else {
            alert('All fields are required!');
        }
    });

    searchInput.addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });

    renderProducts();
});