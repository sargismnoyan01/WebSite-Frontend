document.addEventListener("DOMContentLoaded", function () {
    const navMenuItems = document.querySelectorAll('.nav-menu li');
    const cartCount = document.querySelector('.nav-cart-count');
    const threeLineIcon = document.querySelector('.three-line-icon');
    const dropdown = document.querySelector('.dropdown');
    
    let user = null; 
    let openCategoryMenu = false;

    navMenuItems.forEach(item => {
        item.addEventListener('click', function () {
            navMenuItems.forEach(i => i.querySelector('hr')?.remove());
            const hr = document.createElement('hr');
            item.appendChild(hr);
        });
    });

    threeLineIcon.addEventListener('click', function () {
        const isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block'; 
    });

    
    cartCount.textContent = "0"; 
});
