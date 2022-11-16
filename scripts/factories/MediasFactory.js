let newLikesNumber;
const MediaFactory = (medias, photographer) => {
  const { id, title, image, video, likes } = medias;

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
    cardLikes.addEventListener("click", () => toggleLikes(id));

    // Toggle +1 or -1 when clik on heart
    let isLiked = false;
    function toggleLikes(id) {
      isLiked != isLiked;
      if (id === id && isLiked === false) {
        const newLikesNumber = likes + 1;
        cardLikes.innerHTML = `${newLikesNumber} <i class="fa-sharp fa-solid fa-heart"></i>`;
        isLiked = true;
      } else if (id === id && isLiked === true) {
        const newLikesNumber = likes;
        cardLikes.innerHTML = `${newLikesNumber} <i class="fa-sharp fa-solid fa-heart"></i>`;
        isLiked = false;
      }
    }

    mediaInfos.appendChild(h3);
    mediaInfos.appendChild(cardLikes);

    const img = document.createElement("img");
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

// CREATE ENCART
const createEncart = (rightPhotographer, totalLikes) => {

  const { price } = rightPhotographer;

  const encart = document.querySelector(".likes-and-price");
  const p = document.createElement("p");
  p.innerHTML = `${totalLikes} <i class="fa-sharp fa-solid fa-heart"></i>`;
  const span = document.createElement("span");
  span.textContent = ` ${price} € / jour`;
  encart.appendChild(p);
  encart.appendChild(span);

  return { encart };
};
