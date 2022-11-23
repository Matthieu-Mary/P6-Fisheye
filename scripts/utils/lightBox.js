const lightbox = document.querySelector(".lightbox");
let lightBoxActive = false;

function lightBox(e, rightMedias) {

  // current card
  const { currentTarget } = e;
  const mediaTitle = currentTarget.parentNode.querySelector("h3").textContent;
  
  // get all medias 
  const mediasArray = [];
  function getAllMedias(rightMedias) {
    rightMedias.forEach((media) => {
      mediasArray.push(media);
    })
  }
  getAllMedias(rightMedias);
  console.log(mediasArray)

// current media informations (by title comparison)
  let currentTitle;
  let currentImage;
  let currentVideo;
  let currentIndex;
  mediasArray.forEach((media, index) => {
    if (media.title == mediaTitle) {
      currentTitle = media.title;
      currentImage = media.image;
      currentVideo = media.video;
      currentIndex = index;
    } 
  });
  console.log(currentTitle, currentImage, currentVideo, currentIndex)

  // set actual key egual to card index
  lightbox.dataset.key = currentIndex;
  console.log(currentIndex)
  
  lightBoxActive = !lightBoxActive;

  createLightBox(currentTarget,cardTitle);

}

function createLightBox() {
  // GLOBAL
  lightbox.classList.toggle("active");
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
  lightbox.appendChild(content);
  lightbox.appendChild(title)

  return { lightBox }

}

function closeLightBox() {
  lightbox.classList.toggle("active");
  lightBoxActive = false;
}

function previousImage() {
  console.log("image précédente");
}

function nextImage() {
  console.log("image suivante");
}
