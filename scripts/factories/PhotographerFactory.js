/* eslint-disable @typescript-eslint/no-unused-vars */

// Display photographers card on Homepage.
function photographerHomepage(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUsersCardsHome() {
    const url = `.././pages/photographer.html?id=${id}`;

    const article = document.createElement("article");
    const link = document.createElement("a");
    link.setAttribute("aria-label", name)
    link.href = url;
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.alt = `${name} profile picture`;
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.ariaLabel = "photographer name";
    const h3 = document.createElement("h3");
    h3.textContent = `${city}, ${country}`;
    h3.ariaLabel = "photographer location";
    const p = document.createElement("p");
    p.textContent = tagline;
    p.ariaLabel = "photographer short description";
    const span = document.createElement("span");
    span.textContent = `${price}€/jour`;
    span.ariaLabel = "photographer price per day";
    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    link.appendChild(h3);
    link.appendChild(p);
    link.appendChild(span);
    return article;
  }

  return { getUsersCardsHome };
}

// Display Photographer header card on photographer page
function photographerPage(data) {
  const { name, city, country, tagline, portrait } = data;

  const picture = `../assets/photographers/${portrait}`;

  function getUserCardHeader() {
    const photographerHeader = document.querySelector(".photographer-header");

    const photographerInfos = document.createElement("div");
    photographerInfos.classList.add("photographer-infos");
    const h1 = document.createElement("h1");
    h1.textContent = name;
    const h2 = document.createElement("h2");
    h2.textContent = `${city}, ${country}`;
    const p = document.createElement("p");
    p.textContent = tagline;
    photographerInfos.appendChild(h1);
    photographerInfos.appendChild(h2);
    photographerInfos.appendChild(p);
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `${name} profile picture`);

    photographerHeader.appendChild(photographerInfos);
    photographerHeader.appendChild(img);

    return { photographerHeader };
  }

  return { getUserCardHeader };
}
