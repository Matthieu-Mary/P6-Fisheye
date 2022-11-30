const MediaFactory = (media, rightPhotographer) => {
  const { title, image, video, likes, date } = media;
  
  const { name } = rightPhotographer;

  // Get only photographers first name to get the right media images
  const photographerName = name;
  const fullNameArr = photographerName.split(" ");
  const firstName = fullNameArr[0];

  const picture = `../assets/SamplePhotos/${firstName}/${image}`;
  const videoSrc = `../assets/SamplePhotos/${firstName}/${video}`;
  const mediasSection = document.querySelector(".medias");

  function createMediaCard() {
    const card = document.createElement("figure");
    card.classList.add("media-card");
    // Use dataset to sore date in html element and use it in another JS file to sort medias by date
    card.dataset.date = date;
    
    const mediaInfos = document.createElement("figcaption");
    mediaInfos.classList.add("media-infos");
    
    const h3 = document.createElement("h3");
    h3.textContent = title;
    
    const cardLikes = document.createElement("div");
    cardLikes.classList.add("card-likes");
    cardLikes.setAttribute("role", "button");
    cardLikes.setAttribute("aria-label", "likes");
    cardLikes.addEventListener("click", (e) =>
    increaseLikesCard(e, rightPhotographer)
    );
    
    const likesNumber = document.createElement("p");
    likesNumber.classList.add("likes-number");
    likesNumber.textContent = likes;
    
    const heart = document.createElement("i");
    heart.innerHTML = `<i class="fa-sharp fa-solid fa-heart"></i>`;
    
    cardLikes.appendChild(likesNumber);
    cardLikes.appendChild(heart);
    mediaInfos.appendChild(h3);
    mediaInfos.appendChild(cardLikes);
    
    // Images
    const img = document.createElement("img");
    img.setAttribute("alt", title);
    img.setAttribute("tabindex", 0);
    img.setAttribute("aria-haspopup", "dialog")
    img.setAttribute("onkeydown", 'enterKeyPressed(event) ? lightBox(event) : undefined')
    img.addEventListener("click", (e) => lightBox(e));
    if (image) {
      getMediaImage();
    }
    function getMediaImage() {
      img.setAttribute("src", picture);
      card.appendChild(img);
    }

    // Video
    const vid = document.createElement("video");
    vid.setAttribute("tabindex", 0);
    vid.setAttribute("alt", title);
    vid.setAttribute("onkeydown", 'enterKeyPressed(event) ? lightBox(event) : undefined')
    vid.addEventListener("click", (e) => lightBox(e));
    if (video) {
      getMediaVideo();
    }
    function getMediaVideo() {
      vid.setAttribute("src", videoSrc);
      card.appendChild(vid);
    }

    card.appendChild(mediaInfos);
    mediasSection.appendChild(card);

    return { mediasSection };
  }

  return { createMediaCard };
};

// ENCART
function createEncart(rightPhotographer, totalLikes) {
  const { price } = rightPhotographer;

  const totalLikesP = document.querySelector(".total-likes p");
  totalLikesP.textContent = totalLikes;
  const photographerPrice = document.querySelector(".encart .price");
  photographerPrice.textContent = `${price}€ / jour`;
}
