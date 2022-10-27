//Parameters of VIDEO-section
const videoSwiper = new Swiper('.video__slider-container', {
  wrapperClass: 'video__slider',
  slideClass: 'video__slide',
  slidesPerView: 'auto',
  speed: 1000,
  slideToClickedSlide: true,
  keyboard: true,
});

const videoSlideItem = document.querySelector('#video__slide');
const twoVideosBlock = document.querySelector('#two-videos');
const multipleVideosBlock = document.querySelector('#multiple-videos');

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

// VIDEO-SECTION functions
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
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

// Function: append iframe and button
function setupVideo (video) {
  const link = video.querySelector('.video__link');
  const media = video.querySelector('.video__media');
  const button = video.querySelector('.video__button');
  const id = parseMediaURL(media);

  video.addEventListener ('click', () => {
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

// VIDEO-section function: append new video to slider
function createVideoBlock (url) {
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

function appendVideo (block, videoLinks) {
  for (let i=0; i < videoLinks.length; i++) {
    block.append(createVideoBlock(videoLinks[i]));
  }
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

  cardElement.querySelector('.persons__card-photo').style.backgroundImage = `url(${image})`;
  cardElement.querySelector('.persons__card-caption-name').textContent = name;
  cardElement.querySelector('.persons__card-caption-about').textContent = about;

  return cardElement;
}

// Rendering cards to the end of the node
function renderCard(slider, card) {
  slider.appendSlide(card);
}

// Inserting cards from the initial array
function loadInitialCards(cards, createFunction, swiper) {
  cards.forEach((element) => {
    const newCard = createFunction(element);
    renderCard(swiper, newCard);
  });
}

loadInitialCards(playsInitialCards, createPlayCard, playsSwiper);
loadInitialCards(personsInitialCards, createPersonCard, personsSwiper);

//открытие попапа бургерного меню

const burgerPopup = document.querySelector('.burger-popup');
  const burgerButton = document.querySelector('.burger-button');

function toggleBurgerMenu() {  
  burgerPopup.classList.toggle('burger-popup_opened');
  burgerButton.classList.toggle('burger-button_active');
}

burgerButton.addEventListener('click', toggleBurgerMenu);

//добавление афиш

const blockThreePosters = document.querySelector('#three-posters');
const blockTwoPosters = document.querySelector('#two-posters');
const blockOnePoster = document.querySelector('#one-poster');
const templatePosters = document.querySelector('#poster').content;

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
};

function renderPoster(obj, block) {
  block.append(createPoster(obj));
}

function addPostersToBlock(arr, block) {
  arr.forEach(item => (renderPoster(item, block)));
};

function addPostersToBlockTwoPosters() {
  addPostersToBlock(twoPosters, blockTwoPosters);
  blockTwoPosters.querySelectorAll('.poster').forEach(item => item.classList.add('poster_for-double'));
}

function addPostersToBlockOnePoster() {
  addPostersToBlock(onePoster, blockOnePoster);
  blockOnePoster.querySelector('.poster').classList.add('poster_for-single');
  blockOnePoster.querySelector('.poster-border').classList.add('poster-border_for-single');
}

addPostersToBlock(threePosters, blockThreePosters);
addPostersToBlockTwoPosters()
addPostersToBlockOnePoster()

//
appendVideo(twoVideosBlock, twoVideosInitialSlides);
appendVideo(multipleVideosBlock, multipleVideosInitialSlides);
findVideos();

