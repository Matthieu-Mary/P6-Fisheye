let lightBoxActive = false;

function getAllMedias() {
  const allMediasNodes = document.querySelectorAll(".media-card");
  return Array.prototype.slice.call(allMediasNodes);
}

function lightBox(e) {
  const lightbox = document.querySelector(".lightbox");
  // current card
  const { currentTarget } = e;
  const currentMedia = currentTarget.parentNode;
  const allMedias = getAllMedias();
  const indexMedia = allMedias.indexOf(currentMedia);

  lightbox.dataset.key = indexMedia;
  lightbox.classList.add("active");

    createLightBox(lightbox);
}

function createLightBox(lightbox) {
  // GLOBAL
  const allMedias = getAllMedias();
  const currentKey = lightbox.dataset.key;
  console.log(currentKey + " current")
  const currentImage = allMedias[currentKey].querySelector("img");
  // const currentVideo = allMedias[currentKey].querySelector("video");
  // console.log(currentVideo)
  const currentTitle = allMedias[currentKey].querySelector("h3").textContent;
  
  // IMAGES
  const imageLightBox = document.querySelector(".lightbox-img");
  imageLightBox.setAttribute("src", currentImage.src);
  
  // VIDEO
  // const videoLightBox = document.createElement("video");
  // videoLightBox.classList.add("lightbox-video");
  // videoLightBox.setAttribute("src", currentVideo);
  
  // CLOSE BUTTON
  const closeBtn = document.querySelector(".lightbox-close");
  closeBtn.addEventListener("click", () => closeLightBox(lightbox));
  
  //   TITLE
  const title = document.querySelector(".lightbox h3");
  title.textContent = currentTitle;
  
  return { lightbox };
}

function closeLightBox(lightbox) {
  lightbox.classList.remove("active");
  lightBoxActive = false;
}

// LES DEUX FONCTIONS SONT APPELES LE DOUBLE DE CE QUI EST CLIQUE CAR CHEVRON RESTE
function previousImage() {
  const lightbox = document.querySelector(".lightbox");
  let currentKey = parseInt(lightbox.dataset.key);
  if(currentKey > 0) {
    currentKey -= 1;
    lightbox.dataset.key = currentKey;
    createLightBox(lightbox);
  } 
}

function nextImage() {
  const lightbox = document.querySelector(".lightbox");
  const allMedias = getAllMedias();
  let currentKey = parseInt(lightbox.dataset.key);
  if (currentKey <= allMedias.length - 1) {
    currentKey += 1;
    lightbox.dataset.key = currentKey;
    createLightBox(lightbox);
  }
}