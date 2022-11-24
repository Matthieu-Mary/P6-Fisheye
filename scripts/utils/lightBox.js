const lightbox = document.querySelector(".lightbox");
let lightBoxActive = false;

function getAllMedias() {
  const allMediasNodes = document.querySelectorAll(".media-card");
  return Array.prototype.slice.call(allMediasNodes);
}

function lightBox(e) {
  // current card
  const { currentTarget } = e;
  const currentMedia = currentTarget.parentNode;
  const allMedias = getAllMedias();
  const indexMedia = allMedias.indexOf(currentMedia);

  lightbox.dataset.key = indexMedia;

  lightbox.classList.toggle("active");

  createLightBox()

  lightBoxActive = true;
}

function createLightBox() {
  // GLOBAL
  const allMedias = getAllMedias();
  const currentKey = lightbox.dataset.key;
  const currentImage = allMedias[currentKey].querySelector("img").cloneNode(true);
  console.log(currentImage)
  // const currentVideo = allMedias[currentKey].querySelector("video");
  // console.log(currentVideo)
  const currentTitle = allMedias[currentKey].querySelector("h3").textContent;
  console.log(currentTitle)

  const content = document.createElement("div");
  content.classList.add("lightbox-content");

  // IMAGES
  const imageLightBox = document.createElement("img");
  imageLightBox.classList.add("lightbox-img");
  imageLightBox.setAttribute("src", currentImage.src);


  // VIDEO
  // const videoLightBox = document.createElement("video");
  // videoLightBox.classList.add("lightbox-video");
  // videoLightBox.setAttribute("src", currentVideo);
  

  // LEFT CHEVRON
  const chevronLeft = document.createElement("i");
  chevronLeft.classList.add("chevron-left");
  chevronLeft.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-left"></i>`;
  chevronLeft.addEventListener("click", () =>
    previousImage()
  );

  // RIGH CHEVRON
  const chevronRight = document.createElement("i");
  chevronRight.classList.add("chevron-right");
  chevronRight.innerHTML = `<i class="fa-sharp fa-solid fa-chevron-right"></i>`;
  chevronRight.addEventListener("click", () =>
    nextImage()
  );

  // CLOSE BUTTON
  const closeBtn = document.createElement("i");
  closeBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
  closeBtn.classList.add("lightbox-close");
  closeBtn.addEventListener("click", () => closeLightBox());

  //   TITLE
  const title = document.createElement("h3");
  title.textContent = currentTitle;

  content.appendChild(chevronLeft);
  content.appendChild(imageLightBox);
  content.appendChild(chevronRight);
  content.appendChild(closeBtn);
  lightbox.appendChild(content);
  lightbox.appendChild(title);

  return { lightBox };
}

function closeLightBox() {
  lightbox.classList.toggle("active");
  lightBoxActive = false;
}

function previousImage() {
  let currentKey = Number(lightbox.dataset.key);
  if(currentKey > 0) {
    const newCurrentKey = currentKey - 1;
    lightbox.dataset.key = newCurrentKey;
    createLightBox()
  }
}

function nextImage() {
  let currentKey = Number(lightbox.dataset.key);
  const newCurrentKey = currentKey + 1;
  lightbox.dataset.key = newCurrentKey;
  createLightBox()
}

// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CREER UNE LIGHTBOX AVEC SEULEMENT DES ELEMENTS CHANGEANTS, IL FAUT DONC SUPPRIMER LA PARTIE CONTENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!