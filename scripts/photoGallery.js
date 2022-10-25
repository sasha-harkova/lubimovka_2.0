'use strict';

const photosPopUp = document.querySelector('.photo-popup');
const photoGrid = document.querySelector('.photo__grid');
const carouselSlide = document.querySelector('.photo-popup__slide');
const carouselImages = document.querySelectorAll('.photo-popup__slide img')

//buttons
const prevBtn = document.querySelector('.photo-popup__prevBtn');
const nextBtn = document.querySelector('.photo-popup__nextBtn');

// counter 
let counter = 1;
let imageSize = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';

// button listeners
nextBtn.addEventListener('click', () => {
  if (counter === carouselImages.length - 1) return;

  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;

  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].classList.contains('photo-popup__last-slide-clone')) {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
  }
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].classList.contains('photo-popup__first-slide-clone')) {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
  }
});


document.querySelectorAll('.photo__grid img').forEach((element, index) => {
  element.id = `photo-popup_${index + 1}`;
});


photoGrid.addEventListener('click', ({ target }) => {
  counter = Number(target.id.split('_')[1]);
  photosPopUp.classList.add('photo-popup_opened');
  imageSize = carouselImages[0].clientWidth;
  carouselSlide.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
})

document.addEventListener('keydown', ({ key }) => {
  if (key === "Escape") {
    photosPopUp.classList.remove('photo-popup_opened')
  }
})
