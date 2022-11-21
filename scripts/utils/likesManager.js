function increaseLikesCard(e) { 
  
  const currentTarget = e.currentTarget;

  if (!currentTarget.hasAttribute("liked")) {
    currentTarget.setAttribute("liked", "");
    const newLikesNumber = currentTarget.querySelector(".likes-number");
    newLikesNumber.textContent = Number(currentTarget.textContent) +1;
    increaseTotalLikes();
  }


}


function increaseTotalLikes() {
  let sum = 0;
  const allLikes = document.querySelectorAll(".card-likes p");
  const totalLikes = allLikes.forEach(
    (likes) => (sum += Number(likes.textContent))
  );
  
  console.log(sum)
}
