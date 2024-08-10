// product.js
const icon = 'heart.png';
const redIcon = 'red-hearticon.png';

const renderProducts = (Productdata) => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    const discountedValue = (price, dis) => {
        return price - (price * (dis / 100));
    };

    Productdata.forEach(item => {
        const product = item.fields;
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class='image'>
            <img src="${product.img}" alt="${product.name}" class="product-image" />
            </div>
            
            <div class='product-prices'>
                <div class='product-price-new'>${discountedValue(product.price_old, product.discount).toFixed(2)}$</div>
                <div class='product-price-old'>${product.price_old}$</div>
                <img src = "${icon}" alt ="" class ="heart-icon" />
            </div>
            <h3 class='company-name'> ${product.company}/${product.name}</h3>
            <div class='stars'>
                <i class='fa-solid fa-star'></i>
                <i class='fa-solid fa-star'></i>
                <i class='fa-solid fa-star'></i>
                <i class='fa-solid fa-star'></i>
                <i class='fa-solid fa-star'></i>
            </div>
            <div class='buy'>
                <button>Buy Now</button>
            </div>
            
        `;

        const productImage = productCard.querySelector('.product-image');
        const heartIcon = productCard.querySelector('.heart-icon');

        productImage.addEventListener('mouseenter', () => {
            productImage.src = `${product.image_2}`;
        });

        productImage.addEventListener('mouseleave', () => {
            productImage.src = `${product.img}`;
        });

        heartIcon.addEventListener('click', () => {
            if (heartIcon.src.includes('heart.png')) {
                heartIcon.src = redIcon;
            } else {
                heartIcon.src = icon;
            }
        });

        productList.appendChild(productCard);
    });
};

// Use the dynamic data
renderProducts(productData);
