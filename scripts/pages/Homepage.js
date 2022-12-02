/* eslint-disable no-undef */
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerHomepage(photographer);
    const usersCardsHome = photographerModel.getUsersCardsHome();
    photographersSection.appendChild(usersCardsHome);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
