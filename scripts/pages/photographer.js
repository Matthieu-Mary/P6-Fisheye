// GET PHOTOGRAPHER ID
const getId = async () => {
    const params = new URL(document.location).searchParams;
    const id = params.get("id");

    return id
}

const getRightPhotographer = async (photographers) => {
    const id = await getId();
    console.log(id)

    const photographersHeader = document.querySelector(".photographer_header");
   
    // Use Filter with id to find right photographer
    photographers
        .filter(photographer => photographer.id == id )
        .map(photographer => {
            console.log(photographer)
            // const photographerCardModel = displayPhotographerCard(photographer);
            // const createPhotographerCard = photographerCardModel.createPhotographerCard();
            // photographersHeader.appendChild(createPhotographerCard);
        })
        
}
            


async function initPhotographerCard() {
    const { photographers } = await getPhotographers();
    getRightPhotographer(photographers);
}

initPhotographerCard()




