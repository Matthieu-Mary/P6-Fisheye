let isLiked = false;
let newLikesNumber;

function likesManager(media, cardLikes, photographer) {

    const { id, likes } = media;

    isLiked != isLiked;
    if (id === id && isLiked === false) {
      newLikesNumber = likes + 1;
      cardLikes.innerHTML = `${newLikesNumber} <i class="fa-sharp fa-solid fa-heart"></i>`;
      isLiked = true;
    } else if (id === id && isLiked === true) {
      newLikesNumber = likes;
      cardLikes.innerHTML = `${newLikesNumber} <i class="fa-sharp fa-solid fa-heart"></i>`;
      isLiked = false;
    }

    createEncart(photographer, likes)

}




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


