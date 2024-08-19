document.addEventListener('DOMContentLoaded', function () {
    const savedProducts = JSON.parse(localStorage.getItem('savedProducts')) || [];
    const productsContainer = document.querySelector('.products-container');

    savedProducts.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <a href="/product/${product.id}/">View Details</a>
        `;
        productsContainer.appendChild(productCard);
    });
});
