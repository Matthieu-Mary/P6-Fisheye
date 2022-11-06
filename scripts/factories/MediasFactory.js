const MediaFactory = (data, photographer) => {
    const { id, title, image, video, likes, date, price } = data;

    // Get only photographers first name to get the right media images
    const photographerName = photographer.name;
    const fullNameArr = photographerName.split(" ");
    const firstName = fullNameArr[0]

    const picture = `../assets/SamplePhotos/${firstName}/${image}`
    const mediasSection = document.querySelector(".medias");
    
    function createMediaCard() {
        const card = document.createElement("div");
        card.classList.add('media-card');
        const img = document.createElement("img");
        img.setAttribute("src", picture);
        const mediaInfos = document.createElement("div");
        mediaInfos.classList.add("media-infos");
        const h3 = document.createElement("h3");
        h3.textContent = title;
        const toto = document.createElement("span");
        toto.textContent = likes;
        
        mediaInfos.appendChild(h3)
        mediaInfos.appendChild(toto)

        card.appendChild(img)
        card.appendChild(mediaInfos)

        mediasSection.appendChild(card)

        return { mediasSection }
    }
    return { createMediaCard }
}   
