
const photographerPageDOM = document.querySelector("body")
const container = document.createElement("div");

function displayLightBox(img, vid, media, rightMedias) {


    // IMAGE NE FONCTIONNERA PAS CAR NE RENVOIS PAS LE CHEMIN MAIS JUSTE LE NOM DE L'IMAGE
    
    for (let i = 0; i < rightMedias.length; i++) {
        console.log(rightMedias[i].id);
    }
    
    container.style.display = "flex";
    container.classList.add("container-lightbox");
    const content = document.createElement("div");
    content.classList.add("lightbox-content");
    const chevronLeft = document.createElement("i");
    chevronLeft.classList.add("chevron-left");
    chevronLeft.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-left"></i>`;
    chevronLeft.addEventListener("click", () => previousImage());
    const imageLightBox = document.createElement("img");
    imageLightBox.classList.add("lightbox-img");
    if(img) {
        imageLightBox.setAttribute("src", img.src);
    }
    const videoLightBox = document.createElement("video");
    videoLightBox.classList.add("lightbox-video")

    // PARTIE VIDEO A POURSUIVRE
    if(vid) {
        videoLightBox.setAttribute("src", vid.src)
    }
    const chevronRight = document.createElement("i");
    chevronRight.classList.add("chevron-right");
    chevronRight.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-right"></i>`;
    chevronRight.addEventListener("click", () => nextImage());
    const closeBtn = document.createElement("i");
    closeBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    closeBtn.classList.add("lightbox-close");
    closeBtn.addEventListener("click", () => closeLightBox());

    content.appendChild(chevronLeft);
    content.appendChild(imageLightBox);
    content.appendChild(chevronRight);
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