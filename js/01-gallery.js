import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector( '.gallery' );

const galleryItemsArray = [];

galleryItems.forEach(item => {
  const galleryItemEl = document.createElement( 'li' );
  galleryItemEl.classList.add( 'gallery__item' );
  galleryItemEl.innerHTML = `<a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a>`;
  console.log( galleryItemEl );
  galleryItemsArray.push( galleryItemEl );
} );

galleryEl.append( ...galleryItemsArray );

galleryEl.addEventListener( 'click', onGalleryClick );

function onGalleryClick(event) {
  event.preventDefault();

  if ( event.target.className !== "gallery__image" ) {
    return;
  }
  const instance = basicLightbox.create( `<div class="modal">
    <img class="gallery__modal" src="${event.target.dataset.source}"/>
    </div>` );
  instance.show();
    
  const galleryModalEl = document.querySelector( '.basicLightbox' );
  galleryModalEl.addEventListener( 'click', closeModalClick );
  window.addEventListener( 'keydown', closeModalEsc );

  function closeModalEsc( event ) {
    if ( event.code !== 'Escape' ) {
      return
    } else {
      instance.close();
      window.removeEventListener( 'keydown', closeModalEsc );
    }
  };

  function closeModalClick( event ) {
    instance.close();
  };
};



















