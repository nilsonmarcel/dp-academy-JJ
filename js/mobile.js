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

// Animação de fade-in para os elementos do hero

const heroElements = document.querySelectorAll('.hero .txt-hero .title, .hero .txt-hero .description, .hero .txt-hero .buttons');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'none';
            entry.target.offsetHeight;
            entry.target.style.animation = '';
        }
    });
}, { threshold: 0.1 });

heroElements.forEach(el => observer.observe(el));

// Botão voltar ao topo

const backToTopButton = document.querySelector('.back-to-top')

const backToTop = () => {
 if (window.scrollY >= 100) {
backToTopButton.classList.add('show')
 } else {
backToTopButton.classList.remove('show')
 }
}
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


window.addEventListener('scroll', function () {
 backToTop()
})
