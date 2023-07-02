import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
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

mainGallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  blockStandardAction(event);

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const lightbox = new Simplelightbox(` <img src="${event.target.dataset.source}" width="1400" height="1200">`);

  lightbox.show();

  mainGallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      lightbox.close();
    }
  });
}

function blockStandardAction(event) {
    event.preventDefault();
}
