const btnOpenMenuMobile = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#menu-mobile');

btnOpenMenuMobile.addEventListener('click', () => {
    menuMobile.classList.add('open-menu');
});

menuMobile.addEventListener('click', () => {
        menuMobile.classList.remove('open-menu');    
})
