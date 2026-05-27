let imgSlider = document.querySelectorAll('.slider-container .slider-box');

let btnProx = document.querySelector('#proxima');

let btnAnter = document.querySelector('#anterior');

let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');

let contadorImg = imgSlider.length;

let imgAtiva = 0;


function proximoSlide(){

   imgAtiva++;

   if(imgAtiva >= contadorImg){

      imgAtiva = 0;

   }

   mostrarSlider();

}


btnProx.addEventListener('click',proximoSlide);


btnAnter.addEventListener('click',()=>{

   imgAtiva--;

   if(imgAtiva < 0){

      imgAtiva =
      contadorImg - 1;

   }

   mostrarSlider();

});


function mostrarSlider(){

   let antigaImg = document.querySelector('.slider-box.ativo');

   let antigoBtn = document.querySelector('.btn-nav.ativo');

   antigaImg.classList.remove('ativo');

   antigoBtn.classList.remove('ativo');

   imgSlider[imgAtiva].classList.add('ativo');

   btnNav[imgAtiva].classList.add('ativo');

}


btnNav.forEach((btn,index)=>{

   btn.addEventListener('click',()=>{

      imgAtiva=index;

      mostrarSlider();

   });

});


setInterval(
proximoSlide,
5000
);