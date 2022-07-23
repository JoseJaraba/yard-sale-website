const navbarEmail = document.querySelector('.navbar-email');
const popUpMenu = document.querySelector('.desktop-menu ');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.product-detail');


navbarEmail.addEventListener('click', () => {
    if(!shoppingCartMenu.classList.contains('inactive')){
        shoppingCartMenu.classList.add('inactive');
    }
    popUpMenu.classList.toggle('inactive');
});

burgerMenu.addEventListener('click', () => {
    if(!shoppingCartMenu.classList.contains('inactive')){
        shoppingCartMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
});

shoppingCartIcon.addEventListener('click', () => {
    if(!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    shoppingCartMenu.classList.toggle('inactive');
});