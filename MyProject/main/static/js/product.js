document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card) => {
        const heartIcon = card.querySelector('.heart-icon');
        const redHeartIcon = card.querySelector('.red-heart-icon');
        const productId = card.getAttribute('data-id');
        const productName = card.querySelector('.company-name').innerText;
        const productPriceNew = card.querySelector('.product-price-new').innerText;
        const productPriceOld = card.querySelector('.product-price-old').innerText;
        const productImage = card.querySelector('.product-image').getAttribute('src');

        // Load saved products from local storage
        let savedProducts = JSON.parse(localStorage.getItem('savedProducts')) || [];

        // If product is already saved, show the red heart icon
        if (savedProducts.some(p => p.id === productId)) {
            heartIcon.style.display = 'none';
            redHeartIcon.style.display = 'block';
        }

        // Event listener for the heart icon (adding to saved)
        heartIcon.addEventListener('click', function () {
            this.style.display = 'none';
            redHeartIcon.style.display = 'block';

            const product = {
                id: productId,
                name: productName,
                priceNow: productPriceNew,
                priceOld: productPriceOld,
                image: productImage
            };

            savedProducts.push(product);
            localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
        });

        // Event listener for the red heart icon (removing from saved)
        redHeartIcon.addEventListener('click', function () {
            this.style.display = 'none';
            heartIcon.style.display = 'block';

            savedProducts = savedProducts.filter(p => p.id !== productId);
            localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
        });
    });
});
