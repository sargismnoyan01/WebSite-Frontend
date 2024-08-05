const data = [
    { id: 1, name: "Product 1",description:"white",company: "Adidas",price:"50000",discount:"20%", image: '../Images/menitem3.jpg', hoverImage: '../Images/person2.png' },
    { id: 2, name: "Product 2", description:"red",company: "Adidas",price:"25000",discount:"20%", image: "../Images/menitem10.jpg", hoverImage: '../Images/person2.png' },
    { id: 3, name: "Product 3", description:"blue",company: "Adidas",price:"10000",discount:"10%", image: "../Images/womenitem1.jpg", hoverImage: '../Images/person2.png' },
    { id: 4, name: "Product 4", description:"yellow",company: "Adidas",price:"9000",discount:"25%", image: "../Images/womenitem5.jpg", hoverImage: '../Images/person2.png' },
    { id: 5, name: "Product 5", description:"denim",company: "Adidas",price:"17000",discount:"15%", image: "../Images/womenitem9.jpg", hoverImage: '../Images/person2.png' },
];
const icon = '../Images/heart.png'
const redIcon = '../Images/red-hearticon.png';
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const renderProducts = (Productdata) => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 

    const discountedValue = (price, dis) => {
        const discountPercent = parseFloat(dis); // Convert discount to a number
        return price - (price * (discountPercent / 100));
    };

    Productdata.forEach(item => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="product-image" />
            <h2>${item.name}</h2>
            <p>Color:${item.description}</p>
            <p>Company:${item.company}</p>
            <div class='product-prices'>
            <div class='product-price-new'>${discountedValue(item.price, item.discount)}</div>
            <div class='product-price-old'>${item.price}</div>
            <img src = "${icon}" alt ="" class ="heart-icon" />
        </div>    
        `;

        const productImage = productCard.querySelector('.product-image');
        const heartIcon = productCard.querySelector('.heart-icon');

        // Add mouse enter and leave event listeners
        productImage.addEventListener('mouseenter', () => {
            
            productImage.src = item.hoverImage; // Change to hover image
        });

        productImage.addEventListener('mouseleave', () => {
            productImage.src = item.image; // Change back to original image
        });

        heartIcon.addEventListener('click', () => {
            // Check if the heart icon is the original icon
            if (heartIcon.src.includes('heart.png')) {
                heartIcon.src = redIcon; // Change to red heart
            } else {
                heartIcon.src = icon; // Change back to original heart
            }
        });
        productList.appendChild(productCard);
    });
};

const fetchData = () => {
    const shuffledData = shuffleArray(data);
    renderProducts(shuffledData);
};

fetchData();
