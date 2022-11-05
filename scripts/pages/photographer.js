// GET PHOTOGRAPHER ID
const getId = async () => {
    const params = new URL(document.location).searchParams;
    const id = params.get("id");

    return id
}

const getRightPhotographer = async (photographers) => {
    const id = await getId();

    // Use Filter with id to find right photographer and display it in header div
    photographers
        .filter(photographer => photographer.id == id )
        .map(photographer => {
            const { name, city, country, tagline, portrait} = photographer;
            console.log(name, city, country, tagline, portrait)
            const picture = `assets/photographers/${portrait}`;
            console.log(picture)

            const photographerInfos = document.querySelector(".photographer-infos");
            const photographerImgContainer = document.querySelector(".photographer-img-container");

            const h1 = document.createElement("h1");
            h1.textContent = name;
            const h6 = document.createElement("h6");
            h6.textContent = `${city}, ${country}`;
            const p = document.createElement("p");
            p.textContent = tagline;
            photographerInfos.appendChild(h1);
            photographerInfos.appendChild(h6);
            photographerInfos.appendChild(p);


            const img = document.createElement("img");
            img.setAttribute("src", picture);
            photographerImgContainer.appendChild(img);
            
        })        
}
        
async function initPhotographerCard() {
    const { photographers } = await getPhotographers();
    getRightPhotographer(photographers);
}

initPhotographerCard()




