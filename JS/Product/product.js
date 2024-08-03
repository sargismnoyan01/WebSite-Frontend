const data = [
    { id: 1, name: "Product 1", price: "$10", image: '../Images/menitem3.jpg' },
    { id: 2, name: "Product 2", price: "$15", image: "../Images/menitem10.jpg" },
    { id: 3, name: "Product 3", price: "$20", image: "../Images/womenitem1.jpg" },
    { id: 4, name: "Product 4", price: "$25", image: "../Images/womenitem5.jpg" },
    { id: 5, name: "Product 5", price: "$30", image: "../Images/womenitem9.jpg" },
];

console.log(data)
const shuffleArray = (array) => {
    console.log(array)
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const renderProducts = (Productdata) => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 

    Productdata.forEach(item => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <h2>${item.name}</h2>
            <p>${item.price}</p>
        `;
        productList.appendChild(productCard);
    });
};


const fetchData = () => {
    const shuffledData = shuffleArray(data);
    renderProducts(shuffledData);
};


fetchData();
