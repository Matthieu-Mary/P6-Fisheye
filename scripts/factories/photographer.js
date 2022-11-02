function photographerFactory(data) {
    console.log(data);
    const { name, id, city, country, tagline, price, portrait} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h6 = document.createElement( 'h6' );
        h6.textContent = `${city}/${country}`;
        const p = document.createElement("p");
        p.textContent = tagline;
        const span = document.createElement("span");
        span.textContent = `${price}€/jour`
        article.appendChild(img);
        article.appendChild(h2);
        article.appenChild(h6)
        article.appenChild(p)
        article.appenChild(span)
        return (article);
    }
    return { name, id, city, country, tagline, price,picture, getUserCardDOM }
}

photographerFactory()

