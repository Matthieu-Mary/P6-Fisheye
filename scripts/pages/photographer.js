// ---------- GET PHOTOGRAPHER ID ----------
const getId = async () => {
    const params = new URL(document.location).searchParams;
    const id = params.get("id");
    return id
}

const getRightPhotographer = async (photographers) => {
    const id = await getId();
    // Use Filter with id to find right photographer and display it in header div
    const result = photographers.filter(photographer => photographer.id == id )
    return result[0]       
}


// ---------- PHOTOGRAPHER HEADER CARD ----------
async function displayPhotographerCard(photographers) {
    const rightPhotographer = await getRightPhotographer(photographers);
    const photographerPageModel = photographerPage(rightPhotographer); 
    photographerPageModel.getUserCardHeader();    
}


// ---------- MEDIAS SECTION ----------
async function getRightMedias(medias) {
    const id = await getId();
    const results = medias.filter(media => media.photographerId == id);
    return results
}

async function displayMedias(medias, photographers) {
    // Add photographer because photographer name is needed to display the rights images
    const rightPhotographer = await getRightPhotographer(photographers);
    const rightMedias = await getRightMedias(medias);
    rightMedias.forEach(media => {
        const mediaModel = MediaFactory(media, rightPhotographer);
        mediaModel.createMediaCard()
    })
}


// ---------- DISPLAY PHOTOGRAPHER HEADER AND MEDIAS ----------
async function initPhotographerAndMedias() {
    const { photographers } = await getPhotographers();
    const { medias } = await getMedias();

    displayPhotographerCard(photographers);
    displayMedias(medias, photographers);
}

initPhotographerAndMedias();

