
const photographerPageDOM = document.querySelector("body")
const container = document.createElement("div");

function displayLightBox(media, rightMedias) {

   const { image } = media;

    console.log(image)
    // IMAGE NE FONCTIONNERA PAS CAR NE RENVOIS PAS LE CHEMIN MAIS JUSTE LE NOM DE L'IMAGE
    
    for (let i = 0; i < rightMedias.length; i++) {
        console.log(rightMedias[i].id);
    }
    
    container.style.display = "flex"
    container.classList.add("container-lightbox");
    const content = document.createElement("div");
    content.classList.add("lightbox-content")
    const eperonLeft = document.createElement("i");
    eperonLeft.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-left"></i>`;
    eperonLeft.addEventListener("click", () => previousImage())
    const imageLightBox = document.createElement("img");
    imageLightBox.classList.add("lightbox-img")
    imageLightBox.setAttribute("src", image.src);
    const eperonRight = document.createElement("i");
    eperonRight.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-right"></i>`;
    eperonRight.addEventListener("click", () => nextImage())
    const closeBtn = document.createElement("i");
    closeBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    closeBtn.classList.add("lightbox-close");
    closeBtn.addEventListener("click", () => closeLightBox())

    content.appendChild(eperonLeft);
    content.appendChild(image);
    content.appendChild(eperonRight);
    content.appendChild(closeBtn);
    container.appendChild(content)   
    photographerPageDOM.appendChild(container);

}

function closeLightBox() {
   container.style.display = "none";
}

function previousImage() {
    console.log("image précédente");
}

function nextImage() {
    console.log("image suivante")
}