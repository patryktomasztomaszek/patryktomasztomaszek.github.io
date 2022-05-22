import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imagesHTML = (imagesArray) =>
  imagesArray
    .map(
      ({ original, preview, description }) =>
        `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `
    )
    .join("");

gallery.insertAdjacentHTML("beforeend", imagesHTML(galleryItems));
console.log(gallery);

const imageZoom = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(
    `<img src="${event.target.dataset.source}" ></img>`,
    {
      onShow: (modal) => {
        document.onkeydown = function (evt) {
          evt = evt || window.event;
          let isEscape = false;
          if ("key" in evt) {
            isEscape = evt.key === "Escape" || evt.key === "Esc";
          } 
          if (isEscape) {
            modal.close();
          }
        };
      },
    }
  );

  modal.show();
};

gallery.addEventListener("click", imageZoom);
