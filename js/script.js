//Toggle class active untuk menu
const navbarNav = document.querySelector('.navbar-nav');

//Menu diklik
document.querySelector('#menu') .onclick = () => {
    navbarNav.classList.toggle('active');
};

//Toggle class active untuk search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

//Search diklik
document.querySelector('#search-button') .onclick = () => {
    searchForm.classList.toggle('active');
    searchBox.focus();
};

//Toggle class active untuk shopping-bag
const navbarShop = document.querySelector('.navbar-shop');

//Shopping-bag diklik
document.querySelector('#shopping-bag') .onclick = () => {
    navbarShop.classList.toggle('active');
};

//Menghilangkan nav dan search ketika diklik diluar elemen
const menu = document.querySelector('#menu');
const searchButton = document.querySelector('#search-button');
const shoppingBag = document.querySelector('#shopping-bag');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if(!searchButton.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
    if(!shoppingBag.contains(e.target) && !navbarShop.contains(e.target)){
        navbarShop.classList.remove('active');
    }
});



