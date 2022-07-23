const navbarEmail = document.querySelector('.navbar-email');
const popUpMenu = document.querySelector('.desktop-menu ');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', () => {
    popUpMenu.classList.toggle('inactive');
});

burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive')
});