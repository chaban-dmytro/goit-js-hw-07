import { galleryItems } from './gallery-items.js';

// Change code below this line


console.log( galleryItems );

const galleryEl = document.querySelector( '.gallery' );

const galleryItemsArray = [];

galleryItems.forEach(item => {
  const galleryItemEl = document.createElement( 'li' );
  galleryItemEl.classList.add( 'gallery__item' );
  galleryItemEl.innerHTML = `<a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"/></a>`;
  console.log( galleryItemEl );
  galleryItemsArray.push( galleryItemEl );
} );
galleryEl.append( ...galleryItemsArray );

galleryEl.addEventListener( 'click', onGalleryClick );

function onGalleryClick( event ) {
  event.preventDefault();
};


var lightbox = new SimpleLightbox( '.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
} );



