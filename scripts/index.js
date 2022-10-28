// ---------------------- CONSTANTS ---------------------- 
const videoSlideItem = document.querySelector('#video__slide');
const twoVideosBlock = document.querySelector('#two-videos');
const multipleVideosBlock = document.querySelector('#multiple-videos');
const burgerPopup = document.querySelector('.burger-popup');
const burgerButton = document.querySelector('.burger-button');
const blockThreePosters = document.querySelector('#three-posters');
const blockTwoPosters = document.querySelector('#two-posters');
const blockOnePoster = document.querySelector('#one-poster');
const templatePosters = document.querySelector('#poster').content;
const photosContainer = document.querySelector('.photo__grid');
const photosPopup = document.querySelector('.photo-popup');
const photoGrid = document.querySelector('.photo__grid');
const photoPopupCloseBtn = document.querySelector('.photo-popup__close-button');
let initialPhotoSlide;


// ---------------------- SLIDERS INITIALIZATION ---------------------- 
//Parameters of VIDEO-section slider
const videoSwiper = new Swiper('.video__slider-container', {
  wrapperClass: 'video__slider',
  slideClass: 'video__slide',
  slidesPerView: 'auto',
  speed: 1000,
  slideToClickedSlide: true,
  keyboard: true,
});

// Parameters of PLAYS-section slider
const playsSwiper = new Swiper('.plays__cards', {
  wrapperClass: 'plays__wrapper',
  slideClass: 'plays__slide',
  spaceBetween: 30,
  slidesPerView: 'auto',
  speed: 1000,
  slideToClickedSlide: true,
  keyboard: true,
});

// Parameters of PERSONS-section slider
const personsSwiper = new Swiper('.persons__cards', {
  wrapperClass: 'persons__wrapper',
  slideClass: 'persons__slide',
  spaceBetween: 30,
  slidesPerView: 'auto',
  speed: 1000,
  slideToClickedSlide: true,
  keyboard: true,
});


// ---------------------- FUNCTIONS ---------------------- 

// Function to open popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

// Function to close popup
function closePopup(){
  document.querySelector('.popup_opened').classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

// Function to close popup by pressing the escape key
function closePopupByEsc(evt) {
  if (evt.key === 'Escape') closePopup();
}

//Burger-menu switcher
function toggleBurgerMenu() {
  burgerPopup.classList.toggle('burger-popup_opened');
  burgerButton.classList.toggle('burger-button_active');
}


// ---------------------- VIDEO-SECTION HANDLING ---------------------- 
// Function: get the video id from url
function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

// Function: create iframe for the video
function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

// Function: parse youtube media id
function parseMediaURL(media) {
  let regexp =
    /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

// Function: append iframe and button
function setupVideo(video) {
  const link = video.querySelector('.video__link');
  const media = video.querySelector('.video__media');
  const button = video.querySelector('.video__button');
  const id = parseMediaURL(media);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  button.classList.add('video__button_enabled');
}

// Function: find all the videos
function findVideos() {
  let videos = document.querySelectorAll('.video__video-block');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}


// ---------------------- CREATING FUNCTIONS -------------------------
// VIDEO-section function: append new video to slider
function createVideoBlock(url) {
  const videoSlide = videoSlideItem.content.cloneNode(true);
  const link = videoSlide.querySelector('.video__link');
  const source = videoSlide.querySelector('.video__source');
  const image = videoSlide.querySelector('.video__media');

  const regexp = /https:\/\/www\.youtube\.com\/watch\?v\=([a-zA-Z0-9_-]+)/i;
  const match = url.match(regexp);
  const id = match[1];

  link.href = url;
  source.srcset = 'https://i.ytimg.com/vi_webp/' + id + '/maxresdefault.webp';
  image.src = 'https://i.ytimg.com/vi/' + id + '/maxresdefault.jpg';

  return videoSlide;
}

// Creation of PLAYS-section card from a template
function createPlayCard(cardData) {
  const { title, author, city, year } = cardData;
  const cardElement = document
    .querySelector('#plays-slider')
    .content.querySelector('.plays__slide')
    .cloneNode(true);

  cardElement.querySelector('.plays__card-title').textContent = title;
  cardElement.querySelector('.plays__card-caption-title').textContent = author;
  cardElement.querySelector('.plays__card-caption-city').textContent = city;
  cardElement.querySelector('.plays__card-caption-year').textContent = year;

  return cardElement;
}

// Creation of PERSONS-section card from a template
function createPersonCard(cardData) {
  const { image, name, about } = cardData;
  const cardElement = document
    .querySelector('#persons-slider')
    .content.querySelector('.persons__slide')
    .cloneNode(true);

  cardElement.querySelector(
    '.persons__card-photo'
  ).style.backgroundImage = `url(${image})`;
  cardElement.querySelector('.persons__card-caption-name').textContent = name;
  cardElement.querySelector('.persons__card-caption-about').textContent = about;

  return cardElement;
}

// Creation of posters for PERFORMANCES-section
function createPoster(obj) {
  const poster = templatePosters.cloneNode(true);
  poster.querySelector('.poster__image').src = obj.image;
  poster.querySelector('.poster__image').alt = `Афиша спекталя ${obj.name}`;
  poster.querySelector('.poster__date').textContent = obj.date;
  poster.querySelector('.poster__time').textContent = obj.time;
  poster.querySelector('.poster__title').textContent = obj.name;
  poster.querySelector('.poster__author_first').textContent = obj.authorFirst;
  poster.querySelector('.poster__author_second').textContent = obj.authorSecond;
  poster.querySelector('.poster__about').textContent = obj.about;
  poster.querySelector('.poster__button_about').href = obj.linkAbout;
  poster.querySelector('.poster__button_tickets').href = obj.linkBuyTicket;

  return poster;
}

// Creation of photo for PHOTO section
function createPhoto(photoData) {
  const { name, src } = photoData;
  const photo = document.createElement('img');

  photo.src = src;
  photo.alt = name;
  photo.classList.add('photo__item');

  return photo;
}

// Creation of photo for PHOTO-POPUP
function createPopupPhoto(photoData) {
  const { name, src } = photoData;
  const picture = document
    .querySelector('#photo-popup-slider')
    .content.querySelector('.photo-popup__slide')
    .cloneNode(true);
  const image = picture.querySelector('.photo-popup__image');

  image.src = src;
  image.alt = name;

  return picture;
}


// ---------------------- RENDER FUNCTIONS ---------------------- 
// Render function
function renderItems(item, block) {
  block.append(item);
}

// Slider render function
function renderSlide(card, slider) {
  slider.appendSlide(card);
}


// ---------------------- INSERTING FUNCTIONS ----------------------
// Inserting data from the initial arrays
function loadInitialData(data, createFunction, renderFunction, node) {
  data.forEach((item) => {
    const element = createFunction(item);
    renderFunction(element, node);
  });
}

// Modifier for one poster-card
function modifyOnePosterLoad(loadFunction, data, createFunction, renderFunction, node) {
  loadFunction(data, createFunction, renderFunction, node);
  node.querySelector('.poster').classList.add('poster_for-single');
  node.querySelector('.poster-border')
  .classList.add('poster-border_for-single');
}

// Modifier for two poster-cards
function modifyTwoPostersLoad(loadFunction, data, createFunction, renderFunction, node) {
  loadFunction(data, createFunction, renderFunction, node);
  node
    .querySelectorAll('.poster')
    .forEach((item) => item.classList.add('poster_for-double'));
}

// Enable slider by click on photo
function enablePhotoPopupSlider(evt) {
  // Open target photo
  initialPhotos.forEach(item => {
    if (item.name === evt.target.alt) initialPhotoSlide = initialPhotos.indexOf(item);
  });
  // Initialize slider of PHOTO-POPUP
  const photoPopupSwiper = new Swiper('.photo-popup__container', {
    wrapperClass: 'photo-popup__wrapper',
    slideClass: 'photo-popup__slide',
    slidesPerView: 'auto',
    centeredSlides: true,
    speed: 1000,
    slideToClickedSlide: true,
    keyboard: true,
    initialSlide: initialPhotoSlide,
    navigation: {
      nextEl: '.photo-popup__next-btn',
      prevEl: '.photo-popup__prev-btn'
    },
  });
  // Load initial cards of PHOTO-POPUP slider
  loadInitialData(initialPhotos, createPopupPhoto, renderSlide, photoPopupSwiper);
  // Open PHOTO-POPUP
  openPopup(photosPopup);
}


// ---------------------- EVENT LISTENERS ---------------------- 
burgerButton.addEventListener('click', toggleBurgerMenu);
photoPopupCloseBtn.addEventListener('click', closePopup);
photoGrid.addEventListener('click', enablePhotoPopupSlider);

loadInitialData(twoVideosInitialSlides, createVideoBlock, renderItems, twoVideosBlock);
loadInitialData(multipleVideosInitialSlides, createVideoBlock, renderItems, multipleVideosBlock);
loadInitialData(initialPhotos, createPhoto, renderItems, photosContainer);
loadInitialData(playsInitialCards, createPlayCard, renderSlide, playsSwiper);
loadInitialData(personsInitialCards, createPersonCard, renderSlide, personsSwiper);
loadInitialData(threePosters, createPoster, renderItems, blockThreePosters);

modifyOnePosterLoad(loadInitialData, onePoster, createPoster, renderItems, blockOnePoster);
modifyTwoPostersLoad(loadInitialData, twoPosters, createPoster, renderItems, blockTwoPosters);

findVideos();