'use strict';

const carouselSlide = document.querySelector('.photo-popup__slide');
const carouselImages = document.querySelectorAll('.photo-popup__slide img')

//buttons
const prevBtn = document.querySelector('.photo-popup__prevBtn');
const nextBtn = document.querySelector('.photo-popup__nextBtn');

// counter 
let counter = 1;
const imageSize = carouselImages[0].clientWidth;

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

// function setSwipe() {
//   let touchstartX = 0
//   let touchendX = 0

//   function checkDirection() {
//     if (touchendX < touchstartX) alert('swiped left!')
//     if (touchendX > touchstartX) alert('swiped right!')
//   }

//   document.addEventListener('touchstart', e => {
//     touchstartX = e.changedTouches[0].screenX
//   })

//   document.addEventListener('touchend', e => {
//     touchendX = e.changedTouches[0].screenX
//     checkDirection()
//   })
// }

