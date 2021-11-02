// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// // Add imports above this line
// import { galleryItems } from './gallery-items.js';
const { galleryItems } = require('./gallery-items.js');
// Change code below this line

const imageContainer = document.querySelector('.gallery');
const imagesMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
  })
  .join('');

imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);
console.log(imageContainer);
// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
//   enableKeyboard: true,
//   animationSlide: true,
//   animationSpeed: 250,
// });
