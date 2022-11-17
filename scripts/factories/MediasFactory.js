const MediaFactory = (media, photographer, rightMedias) => {

  const { id, title, image, video, likes } = media;

  const { name } = photographer;

  // Get only photographers first name to get the right media images
  const photographerName = name;
  const fullNameArr = photographerName.split(" ");
  const firstName = fullNameArr[0];

  const picture = `../assets/SamplePhotos/${firstName}/${image}`;
  const videoSrc = `../assets/SamplePhotos/${firstName}/${video}`;
  const mediasSection = document.querySelector(".medias");

  function createMediaCard() {
    const card = document.createElement("div");
    card.classList.add("media-card");
    const mediaInfos = document.createElement("div");
    mediaInfos.classList.add("media-infos");
    const h3 = document.createElement("h3");
    h3.textContent = title;
    const cardLikes = document.createElement("span");
    cardLikes.innerHTML = `${likes} <i class="fa-sharp fa-solid fa-heart"></i>`;
    // Call likesManager function
    cardLikes.addEventListener("click", () => likesManager(media, cardLikes, photographer));
    
    mediaInfos.appendChild(h3);
    mediaInfos.appendChild(cardLikes);
    const img = document.createElement("img");
    img.addEventListener("click", () => displayLightBox(img, vid, media, rightMedias));
    if (image) {
      img.setAttribute("src", picture);
      card.appendChild(img);
    }
    const vid = document.createElement("video");
    if (video) {
      vid.setAttribute("src", videoSrc);
      card.appendChild(vid);
    }
    card.appendChild(mediaInfos);
    mediasSection.appendChild(card);
    return { mediasSection };
  }

  return { createMediaCard };
};


