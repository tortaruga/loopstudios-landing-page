const openMenuBtn = document.querySelector('.nav__open-menu-btn');
const closeMenuBtn = document.querySelector('.nav__close-menu-btn');
const mobileMenu = document.querySelector('.nav__mobile-menu');

openMenuBtn.addEventListener('click', () => {
   mobileMenu.style.display = 'flex';
})

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
})