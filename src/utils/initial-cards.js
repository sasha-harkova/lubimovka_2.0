// Imports
import photo_1 from '../images/photo_grid_1.jpg';
import photo_2 from '../images/photo_grid_2.jpg';
import photo_3 from '../images/photo_grid_3.jpg';
import photo_4 from '../images/photo_grid_4.jpg';
import photo_5 from '../images/photo_grid_5.jpg';
import photo_6 from '../images/photo_grid_6.jpg';
import photo_7 from '../images/photo_grid_7.jpg';
import photo_8 from '../images/photo_grid_8.jpg';
import person_1 from '../images/persons_1.png';
import person_2 from '../images/persons_2.png';
import person_3 from '../images/persons_3.png';
import poster_mama from '../images/poster_mama.jpg';



// Array of initial cards for PLAYS section
const playsInitialCards = [
  {
    title: 'Солнечная линия',
    author: 'Екатерина Августеняк',
    city: 'Санкт-Петербург',
    year: 2020,
  },
  {
    title: 'МАМА',
    author: 'Екатерина Августеняк',
    city: 'Санкт-Петербург',
    year: 2020,
  },
  {
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    author: 'Екатерина Августеняк',
    city: 'Санкт-Петербург',
    year: 2020,
  },
  {
    title: 'Опус ДНК',
    author: 'Екатерина Августеняк',
    city: 'Санкт-Петербург',
    year: 2020,
  },
  {
    title: 'МАМА',
    author: 'Екатерина Августеняк',
    city: 'Санкт-Петербург',
    year: 2020,
  },
];

// Array of initial cards for PERSONS section
const personsInitialCards = [
  {
    image: person_1,
    name: 'Тереза Шимчак',
    about: 'Драматург, сценарист, преподаватель',
  },
  {
    image: person_2,
    name: 'Тереза Шимчак',
    about: 'Драматург, сценарист, преподаватель',
  },
  {
    image: person_3,
    name: 'Тереза Шимчак',
    about: 'Драматург, сценарист, преподаватель',
  },
  {
    image: person_1,
    name: 'Тереза Шимчак',
    about: 'Драматург, сценарист, преподаватель',
  },
];

// Array of initial cards for PERFORMANCE section
// First block array
const threePosters = [
  {
    image: poster_mama,
    date: '15 декабря ',
    time: '11:00',
    name: 'МАМА',
    authorFirst: 'Драматург: Ольга Казакова',
    authorSecond: 'Режиссёр: Катя Ганюшинаяч',
    about: 'читка проекта Любимовка.Ещё',
    linkAbout: '#',
    linkBuyTicket: '#',
  },
  {
    image: photo_1,
    date: '15 декабря ',
    time: '11:00',
    name: 'Про линя',
    authorFirst: 'Драматург: Ольга Казакова',
    authorSecond: 'Режиссёр: Катя Ганюшинаяч',
    about: 'читка проекта Любимовка.Ещё',
    linkAbout: '#',
    linkBuyTicket: '#',
  },
  {
    image: poster_mama,
    date: '15 декабря ',
    time: '11:00',
    name: 'МАМА',
    authorFirst: 'Драматург: Ольга Казакова',
    authorSecond: 'Режиссёр: Катя Ганюшинаяч',
    about: 'читка проекта Любимовка.Ещё',
    linkAbout: '#',
    linkBuyTicket: '#',
  },
];

// Second block array
const twoPosters = [
  {
    image: poster_mama,
    date: '15 декабря ',
    time: '11:00',
    name: 'МАМА',
    authorFirst: 'Драматург: Ольга Казакова',
    authorSecond: 'Режиссёр: Катя Ганюшинаяч',
    about: 'читка проекта Любимовка.Ещё',
    linkAbout: '#',
    linkBuyTicket: '#',
  },
  {
    image: photo_1,
    date: '15 декабря ',
    time: '11:00',
    name: 'Про линя',
    authorFirst: 'Драматург: Ольга Казакова',
    authorSecond: 'Режиссёр: Катя Ганюшинаяч',
    about: 'читка проекта Любимовка.Ещё',
    linkAbout: '#',
    linkBuyTicket: '#',
  },
];

// Third block array
const onePoster = [
  {
    image: photo_1,
    date: '15 декабря ',
    time: '11:00',
    name: 'Про линя',
    authorFirst: 'Драматург: Ольга Казакова',
    authorSecond: 'Режиссёр: Катя Ганюшинаяч',
    about: 'читка проекта Любимовка.Ещё',
    linkAbout: '#',
    linkBuyTicket: '#',
  },
];

// Array of initial videos for VIDEO section
// First block of videos
const twoVideosInitialSlides = [
  'https://www.youtube.com/watch?v=Msvr9vaWxDo',
  'https://www.youtube.com/watch?v=Msvr9vaWxDo',
];
// Second block of videos
const multipleVideosInitialSlides = [
  'https://www.youtube.com/watch?v=Msvr9vaWxDo',
  'https://www.youtube.com/watch?v=Msvr9vaWxDo',
  'https://www.youtube.com/watch?v=Msvr9vaWxDo',
];

// Array of initial photos for PHOTO section
const initialPhotos = [
  { name: 'Первое фото.', src: photo_1, id: 0 },
  { name: 'Второе фото.', src: photo_2, id: 1 },
  { name: 'Третье фото.', src: photo_3, id: 2 },
  { name: 'Четвёртое фото.', src: photo_4, id: 3 },
  { name: 'Пятое фото.', src: photo_5, id: 4 },
  { name: 'Шестое фото.', src: photo_6, id: 5 },
  { name: 'Седьмое фото.', src: photo_7, id: 6 },
  { name: 'Восьмое фото.', src: photo_8, id: 7 },
];

export {
  playsInitialCards,
  personsInitialCards,
  threePosters,
  twoPosters,
  onePoster,
  twoVideosInitialSlides,
  multipleVideosInitialSlides,
  initialPhotos,
};
