//Selecionar elementos
const itemGal = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxCont = document.querySelector(".lightbox-content");
const lightboxImage = document.querySelector(".lightbox-image");
const closeBtn = document.querySelector(".lightbox-close");

itemGal.forEach((item) => {
    item.addEventListener("click", ()=> {
        const imageUrl = item.querySelector(".gallery-image").getAttribute("data-src");
        lightboxImage.setAttribute("src", imageUrl);
        lightbox.style.display = "flex";
    })
})

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
})