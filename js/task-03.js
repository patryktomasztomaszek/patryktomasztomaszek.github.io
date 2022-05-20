const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const task03 = () => {
  const gallery = document.querySelector("ul.gallery");
  const imgHTML = (imgArray) =>
    imgArray
      .map(
        ({ url, alt }) =>
          `<li class="gallery__image"><img src="${url}" alt="${alt}"></li>`
      )
      .join("");
  gallery.insertAdjacentHTML("beforeend", imgHTML(images));

  const cssRules = document.createElement("style");
  cssRules.innerHTML = `
  .gallery {
    list-style:none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 0;
    margin: 20px auto;
  }
  .gallery__image {
    height: 420px;
    width: 620px;
    padding: 20px;
  }
  .gallery__image img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
  `;
  document.head.appendChild(cssRules);
};
task03();
