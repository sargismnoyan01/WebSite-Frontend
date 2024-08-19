document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('#menu-icon')
    const nav_dropdown = document.querySelector('.nav-dropdown')
    const navMenuItems = document.querySelectorAll('.nav-menu li');
    const cartCount = document.querySelector('.nav-cart-count');
    const threeLineIcon = document.querySelector('.three-line-icon');
    const person_icon = document.querySelector('.login-icon')
    const loginIcon = document.querySelector('.login-icon');
    const dropdown = document.querySelector('.login-dropdown');

    if (loginIcon) {
        loginIcon.addEventListener('click', function() {
            if (dropdown.style.display === 'none' || dropdown.style.display === '') {
                dropdown.style.display = 'block';
                dropdown.style.opacity = 1;
                dropdown.style.visibility = 'visible'
            } else {
                dropdown.style.display = 'none';
            }
        });
    }
    
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

    menu.addEventListener('click', function() {
        const isVisible = nav_dropdown.style.display === 'block';
        nav_dropdown.style.display = isVisible ? 'none' : 'block';
    })

});


