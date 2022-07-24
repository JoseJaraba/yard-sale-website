const navbarEmail = document.querySelector('.navbar-email');
const popUpMenu = document.querySelector('.desktop-menu ');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.product-detail');

const cardContainer = document.querySelector('.cards-container')

const productList = [];
productList.push({
    name: 'Camera',
    price: 320,
    image: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: ' Sweater',
    price: 80,
    image: 'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: ' Game Boy',
    price: 195,
    image: 'https://images.pexels.com/photos/2263816/pexels-photo-2263816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});



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
    if(!popUpMenu.classList.contains('inactive')){
        popUpMenu.classList.add('inactive');
    }
    shoppingCartMenu.classList.toggle('inactive');
});

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = `$${product.price}`;
    
    const productName = document.createElement('p');
    productName.innerText = `${product.name}`;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    
    const productInfoCart = document.createElement('img');
    productInfoCart.setAttribute('src', './src/assets/icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productInfoCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
}