
const photographerPageDOM = document.querySelector("body")
const container = document.createElement("div");

function displayLightBox(img) {
    
    container.style.display = "flex"
    container.classList.add("container-lightbox");
    const content = document.createElement("div");
    content.classList.add("lightbox-content")
    const eperonLeft = document.createElement("i");
    eperonLeft.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-left"></i>`;
    const image = document.createElement("img");
    image.classList.add("lightbox-img")
    image.setAttribute("src", img.src);
    const eperonRight = document.createElement("i");
    eperonRight.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-right"></i>`;
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