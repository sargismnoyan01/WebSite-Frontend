const icon = '../static/Images/heart.png'; // Path to the default heart icon
const redIcon = '../static/Images/red-hearticon.png'

const renderProducts = (Productdata) => {
    console.log(product)
    const productList = document.getElementById('product-list');
    const productTemplate = productList.querySelector('.product-card');

    productList.innerHTML = ''; // Clear the template

    Productdata.forEach(item => {
        const product = item.fields;

        // Clone the template for each product
        const productCard = productTemplate.cloneNode(true);

        // Select the relevant elements
        const productImage = productCard.querySelector('.product-image');
        const newPrice = productCard.querySelector('.product-price-new');
        const oldPrice = productCard.querySelector('.product-price-old');
        const companyName = productCard.querySelector('.company-name');
        const heartIcon = productCard.querySelector('.heart-icon');
        const red_heartIcon = productCard.querySelector('.red-heart-icon');
        const buyLink = productCard.querySelector('.buy a');

        // Populate the elements with dynamic data
        productImage.src = product.img;
        productImage.alt = product.name;
        newPrice.textContent = `${(product.price_old - product.price_old * (product.discount / 100)).toFixed(2)}$`;
        oldPrice.textContent = `${product.price_old}$`;
        companyName.textContent = `${product.company_name}/${product.id}`;
        buyLink.href = `/detail/?id=${product.company}`;

        // Event listeners for image hover effect
        productImage.addEventListener('mouseenter', () => {
            productImage.src = product.image_2;
        });

        productImage.addEventListener('mouseleave', () => {
            productImage.src = product.img;
        });

        // Event listener to toggle heart icon
        heartIcon.addEventListener('click', () => {
            red_heartIcon.style.display = 'block'
            heartIcon.style.display = 'none'
        });
        red_heartIcon.addEventListener('click', () => {
            heartIcon.style.display = 'block'
            red_heartIcon.style.display = 'none'
        });

        // Append the product card to the list
        productList.appendChild(productCard);
    });
};

// Execute the render function with the provided product data
renderProducts(productData);

