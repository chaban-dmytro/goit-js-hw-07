import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector( '.gallery' );

const galleryArray = galleryItems.map( ({original, preview, description}) => {
  return `
  <li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`
} ).join( '' );

galleryEl.insertAdjacentHTML( 'beforeend', galleryArray );

galleryEl.addEventListener( 'click', onGalleryClick );

function onGalleryClick(event) {
  event.preventDefault();

  if ( event.target.nodeName !== "IMG" ) {
    return;
  }

  const html = `
		<div class="modal">
    <img class="gallery__modal" src="${event.target.dataset.source}"/>
    </div>
	`
  const instance = basicLightbox.create( html, {
    onShow: ( instance ) => {
      window.addEventListener( 'keydown', closeModalEsc );
    },
    onClose: ( instance ) => {
      window.removeEventListener( 'keydown', closeModalEsc );
    },
      
  } );

  instance.show();
    
  const galleryModalEl = document.querySelector( '.basicLightbox' );
  galleryModalEl.addEventListener( 'click', closeModalClick );
  window.addEventListener( 'keydown', closeModalEsc );

  function closeModalEsc( event ) {
    if ( event.code !== 'Escape' ) {
      return
    } else {
      instance.close();
    }
  };

  function closeModalClick( event ) {
    instance.close();
  };
};



















