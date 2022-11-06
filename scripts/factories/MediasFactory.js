const MediaFactory = (data) => {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    console.log(data)
    const mediasSection = document.querySelector(".medias")
    
    function createMediaCard() {
        const h1 = document.createElement("h1");
        h1.textContent = title;
        mediasSection.appendChild(h1)

        return { mediasSection }
    }
    return { createMediaCard }
}   
