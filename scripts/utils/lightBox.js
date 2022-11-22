const photographerPageDOM = document.querySelector("body");
const container = document.createElement("div");
let lightBoxActive = false;

function toggleLightBox(e, h3) {
  const { currentTarget } = e;
  const cardTitle = h3.textContent;
  lightBoxActive = true;
  console.log(cardTitle);

  createLightBox(currentTarget,cardTitle);
}

function createLightBox(currentTarget, cardTitle) {
  // GLOBAL
  container.style.display = "flex";
  container.classList.add("container-lightbox");
  const content = document.createElement("div");
  content.classList.add("lightbox-content");

  // IMAGES
  const imageLightBox = document.createElement("img");
  imageLightBox.classList.add("lightbox-img");
  if (imageLightBox) {
    imageLightBox.setAttribute("src", currentTarget.src);
  }

  // VIDEO
  const videoLightBox = document.createElement("video");
  videoLightBox.classList.add("lightbox-video");
  if (videoLightBox) {
    videoLightBox.setAttribute("src", currentTarget.src);
  }

  // LEFT CHEVRON
  const chevronLeft = document.createElement("i");
  chevronLeft.classList.add("chevron-left");
  chevronLeft.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-left"></i>`;
  chevronLeft.addEventListener("click", () => previousImage());

  // RIGH CHEVRON
  const chevronRight = document.createElement("i");
  chevronRight.classList.add("chevron-right");
  chevronRight.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-right"></i>`;
  chevronRight.addEventListener("click", () => nextImage());

  // CLOSE BUTTON
  const closeBtn = document.createElement("i");
  closeBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
  closeBtn.classList.add("lightbox-close");
  closeBtn.addEventListener("click", () => closeLightBox());

//   TITLE
const title = document.createElement("h3");
title.textContent = cardTitle;

  content.appendChild(chevronLeft);
  content.appendChild(imageLightBox);
  content.appendChild(chevronRight);
  content.appendChild(closeBtn);
  container.appendChild(content);
  container.appendChild(title)
  photographerPageDOM.appendChild(container);
}

function closeLightBox() {
  console.log("image fermée");
  lightBoxActive = false;
}

function previousImage() {
  console.log("image précédente");
}

function nextImage() {
  console.log("image suivante");
}
