import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imagesHTML = (imagesArray) =>
  imagesArray
    .map(
      ({ original, preview, description }) =>
        `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    )
    .join("");

gallery.insertAdjacentHTML("beforeend", imagesHTML(galleryItems));
console.log(gallery);

let lightbox = new SimpleLightbox(".gallery a", {
  // captions: true,
  captionDelay: 250,
  captionsData: "alt",
});
