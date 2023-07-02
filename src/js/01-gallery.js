import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const mainGallery = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img 
              class="gallery__image" 
              src="${item.preview}" 
              data-source="${item.original}" 
              alt="${item.description}"
            />
          </a>
        </div>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
mainGallery.innerHTML = addGalleryMarkup;

  var lightbox = new SimpleLightbox(`.gallery a`, {
    captions: true, 
    captionDelay: 250, 
    scrollZoom:true,
    scrollZoomFactor:0.5, 
    download: "download here",
    })