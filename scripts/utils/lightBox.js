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
  const currentMedia = document.querySelector(".lightbox-media");
  const currentImage = allMedias[currentKey].querySelector("img");
  const currentVideo = allMedias[currentKey].querySelector("video");
  const mediaImage = document.createElement("img");
  const mediaVideo = document.createElement("video");
  const currentTitle = allMedias[currentKey].querySelector("h3").textContent;

  console.log(allMedias[currentKey].firstChild.tagName)
  // IMAGES OR VIDEO
  if (allMedias[currentKey].firstChild.src.includes(".jpg")) {
    mediaImage.classList.add("lightbox-img");
    mediaImage.setAttribute("src", currentImage.src);
    currentMedia.appendChild(mediaImage);
    // Delete first child beacause we need to display images one by one
    if(currentMedia.childElementCount > 1) {
      console.log(currentMedia.firstChild)
      currentMedia.removeChild(currentMedia.firstChild)
    }
  } else {
    currentMedia.appendChild(mediaVideo);
    mediaVideo.classList.add("lightbox-video");
    mediaVideo.setAttribute("src", currentVideo.src);
    mediaVideo.setAttribute("controls", true);
    if(currentMedia.childElementCount > 1) {
      console.log(currentMedia.firstChild)
      currentMedia.removeChild(currentMedia.firstChild)
    }
  }

  // CLOSE BUTTON
  const closeBtn = document.querySelector(".lightbox-close");
  closeBtn.addEventListener("click", () => closeLightBox(lightbox));

  //   TITLE
  const title = document.querySelector(".lightbox h3");
  title.textContent = currentTitle;

  // Apply black color to chevron if first or last image displayed
  function toggleChevronStyle() {
    const chevronLeft = document.querySelector(".chevron-left");
    const chevronRight = document.querySelector(".chevron-right");
    if (Number(currentKey) === allMedias.length - 1) {
      chevronRight.classList.add("inactive");
    } else if (Number(currentKey) === 0) {
      chevronLeft.classList.add("inactive");
    } else {
      chevronRight.classList.remove("inactive");
      chevronLeft.classList.remove("inactive");
    }
  }
  toggleChevronStyle();

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
  if (currentKey > 0) {
    currentKey -= 1;
    lightbox.dataset.key = currentKey;
    createLightBox(lightbox);
  }
}

function nextImage() {
  const lightbox = document.querySelector(".lightbox");
  const allMedias = getAllMedias();
  let currentKey = parseInt(lightbox.dataset.key);
  if (currentKey <= allMedias.length - 2) {
    currentKey += 1;
    lightbox.dataset.key = currentKey;
    createLightBox(lightbox);
  }
}
