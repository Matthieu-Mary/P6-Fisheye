const MediaFactory = (data, photographer) => {
    const { title, image, video, likes } = data;
    
    const { name } = photographer //!!!!!!!!!Photographer est appelé autant de fois qu'il y a de médias ... bug a résoudre!!!!!!!!!!!!!

    // Get only photographers first name to get the right media images
    const photographerName = name;
    const fullNameArr = photographerName.split(" ");
    const firstName = fullNameArr[0];

    const picture = `../assets/SamplePhotos/${firstName}/${image}`
    const mediasSection = document.querySelector(".medias");
    const heart = "../assets/icons/Vector.svg"; // A revoir
    
    function createMediaCard() {
        const card = document.createElement("div");
        card.classList.add('media-card');
        const img = document.createElement("img");
        img.setAttribute("src", picture);
        const mediaInfos = document.createElement("div");
        mediaInfos.classList.add("media-infos");
        const h3 = document.createElement("h3");
        h3.textContent = title;
        const cardLikes = document.createElement("span");
        cardLikes.textContent = `${likes}`;
        
        mediaInfos.appendChild(h3)
        mediaInfos.appendChild(cardLikes)

        card.appendChild(img)
        card.appendChild(mediaInfos)

        mediasSection.appendChild(card)

        return { mediasSection }
    }

    return { createMediaCard }
    
}   

// CREATE ENCART
const createEncart = (rightPhotographer) => {

    const { price } = rightPhotographer;

    const encart = document.querySelector(".likes-and-price");
    let totalLikes = 23999;
    
    const p = document.createElement("p");
    p.textContent = `${totalLikes} likes`;
    const span = document.createElement("span");
    span.textContent = ` ${price} € / jour`;
    encart.appendChild(p);
    encart.appendChild(span);
 

    return { encart }

}
