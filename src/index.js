const navbarEmail = document.querySelector('.navbar-email');
const popUpMenu = document.querySelector('.desktop-menu ');

navbarEmail.addEventListener('click', () => {
    popUpMenu.classList.toggle('inactive');
});