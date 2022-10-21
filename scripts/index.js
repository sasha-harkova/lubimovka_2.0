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
