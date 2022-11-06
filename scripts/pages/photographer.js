// GET PHOTOGRAPHER ID
const getId = async () => {
    const params = new URL(document.location).searchParams;
    const id = params.get("id");
   
    return id
}

const getRightPhotographer = async (photographers) => {
    const id = await getId();

    // Use Filter with id to find right photographer and display it in header div
    const result = photographers.filter(photographer => photographer.id == id )

    return result[0];       
}


async function displayPhotographerCard(photographers) {

    const rightPhotographer = await getRightPhotographer(photographers);
    const photographerPageModel = photographerPage(rightPhotographer); 
    photographerPageModel.getUserCardHeader();    
    
}

        
async function initPhotographerCard() {
    const { photographers } = await getPhotographers();
    displayPhotographerCard(photographers);
}

initPhotographerCard()




