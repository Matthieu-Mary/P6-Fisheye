function PhotographersHomepage(data) {

    const { name, id, city, country, tagline, price, portrait} = data;

    const picture = `assets/photographers/${portrait}`;
    const url = `.././pages/photographer.html?id=${id}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        link.href = url;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.alt = "photographer profil picture";
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.ariaLabel = "photographer name";
        const h6 = document.createElement( 'h6' );
        h6.textContent = `${city}, ${country}`;
        h6.ariaLabel = "photographer location";
        const p = document.createElement("p");
        p.textContent = tagline;
        p.ariaLabel = "photographer short description"
        const span = document.createElement("span");
        span.textContent = `${price}€/jour`
        span.ariaLabel = "photographer price per day"
        article.appendChild(link)
        link.appendChild(img);
        link.appendChild(h2);
        link.appendChild(h6)
        link.appendChild(p)
        link.appendChild(span)
        return (article);
    }
    return { name, id, picture, getUserCardDOM }
}
