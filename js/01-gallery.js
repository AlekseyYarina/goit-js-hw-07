import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const imgOfGallary = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> </a></li>`;
});
gallery.innerHTML = imgOfGallary.join("");


gallery.addEventListener("click", getOriginalImg);
let lightboxInstance;
function getOriginalImg(e) {

  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const imgUrl = e.target.getAttribute("data-source");
  lightboxInstance = basicLightbox.create(
    `<img src="${imgUrl}" width='1280' height='853'>`
  );
  lightboxInstance.show();

  window.addEventListener("keydown", onCloseKeydown);

  function onCloseKeydown(e) {
    if (e.code === "Escape") {
      lightboxInstance.close();
      window.removeEventListener("keydown", onCloseKeydown);
    }
  }
}