/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const galleryImages = document.querySelectorAll(".gallery-grid img");
  const closeModal = document.querySelector(".modal .close");

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
