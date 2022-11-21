function increaseLikesCard(e) {
  let sum = 0;
  const allTexts = document.querySelectorAll(".card-likes p");
  const totalLikes = allTexts.forEach(
    (likes) => (sum += Number(likes.textContent))
  );
  const currentTarget = e.currentTarget;

  if (!currentTarget.hasAttribute("liked")) {
    currentTarget.setAttribute("liked", "");
    const newLikesNumber = currentTarget.querySelector(".likes-number");
    newLikesNumber.textContent = Number(currentTarget.textContent) +1;
  }

  
}

// CREATE ENCART
// const createEncart = (rightPhotographer, totalLikes) => {

//   const { price } = rightPhotographer;
//   const encart = document.querySelector(".likes-and-price");

//   p.innerHTML = `${totalLikes} <i class="fa-sharp fa-solid fa-heart"></i>`;
//   const span = document.createElement("span");
//   span.textContent = ` ${price} € / jour`;

//   return { encart };
// };
