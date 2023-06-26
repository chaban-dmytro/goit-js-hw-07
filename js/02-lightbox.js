import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector( '.gallery' );

const galleryArray = galleryItems.map( ({original, preview, description}) => {
  return `
  <li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}"  alt="${description}"/></a></li>`
} ).join( '' );
galleryEl.insertAdjacentHTML( 'beforeend', galleryArray );

galleryEl.addEventListener( 'click', onGalleryClick );

function onGalleryClick( event ) {
  event.preventDefault();
};

const lightbox = new SimpleLightbox( '.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
} );



