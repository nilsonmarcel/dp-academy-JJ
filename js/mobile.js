const btnOpenMenuMobile = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#menu-mobile');
const btnOpenBoxMaps = document.querySelector('#btn-box-maps');
const boxMaps = document.querySelector('#box-maps');

btnOpenMenuMobile.addEventListener('click', () => {
    menuMobile.classList.add('open-menu');
});

menuMobile.addEventListener('click', () => {
        menuMobile.classList.remove('open-menu');    
});

btnOpenBoxMaps.addEventListener('click', () => {
    boxMaps.classList.add('open-maps');
});

boxMaps.addEventListener('click', () => {
        boxMaps.classList.remove('open-maps');    
})
