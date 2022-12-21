function increaseLikesCard(e, rightPhotographer) { 
  const { currentTarget } = e;
  console.log(currentTarget)
  if (!currentTarget.hasAttribute("liked")) {
    currentTarget.setAttribute("liked", "");
    const currentHeart = currentTarget.querySelector("img");
    currentHeart.classList.add("active");
    const newLikesNumber = currentTarget.querySelector(".likes-number");
    newLikesNumber.textContent = Number(currentTarget.textContent) +1;
    increaseTotalLikes(rightPhotographer);
  } else {
    currentTarget.removeAttribute("liked");
    const currentHeart = currentTarget.querySelector("img");
    currentHeart.classList.remove("active");
    const newLikesNumber = currentTarget.querySelector(".likes-number");
    newLikesNumber.textContent = Number(currentTarget.textContent) -1;
    increaseTotalLikes(rightPhotographer);
  }
}


function increaseTotalLikes(rightPhotographer) {
  let newTotalLikes = 0;
  const allLikes = document.querySelectorAll(".card-likes p");
  allLikes.forEach(
    (likes) => (newTotalLikes += Number(likes.textContent))
    );
   createEncart(rightPhotographer, newTotalLikes) 
}
