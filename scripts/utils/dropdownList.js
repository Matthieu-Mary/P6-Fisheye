/* eslint-disable @typescript-eslint/no-unused-vars */
function getAllMedias() {
    const allMediasNodes = document.querySelectorAll(".media-card");
    return Array.prototype.slice.call(allMediasNodes);
}

function dropdown(event) {
    const button = event.currentTarget;
    const dropdown = button.parentNode;
    dropdown.classList.toggle('active');
    if (dropdown.classList.contains('active')) {
        button.setAttribute('aria-expanded', true);
    } else {
        button.setAttribute('aria-expanded', false);
    }

    // Add setTimeout because we have to leave time to dropdown menu to toggle his "active" class
    setTimeout(() => button.focus(), 10)
}

function selectedOption(event, name) {
    const { currentTarget } = event;
    const dropdown = currentTarget.parentNode.parentNode;
    const button = dropdown.querySelector("button");
    button.textContent = name;
    dropdown.classList.toggle('active');

    sortMediasBySelectedOption(name);

    setTimeout(() => button.focus(), 10)

}

function sortMediasBySelectedOption(name) {
    const photographerMedias = document.querySelector(".medias");
    let allMedias = getAllMedias();

    switch(name) {
        case 'Popularité':
            // From more liked to less
            allMedias.sort((media, nextMedia) => Number(nextMedia.querySelector(".likes-number").textContent) - Number(media.querySelector(".likes-number").textContent));
            break;
        case "Date":
            // From most recent to oldest
            allMedias.sort((media, nextMedia) =>  nextMedia.dataset.date.localeCompare(media.dataset.date));
            break;
        case "Titre":
            // Alphabetic sort
            allMedias.sort((media, nextMedia) => media.querySelector(".media-infos h3").textContent.localeCompare(nextMedia.querySelector(".media-infos h3").textContent));
            break;
        default:
            alert("Une erreur est survenue");
    }
    photographerMedias.innerHTML = "";
    allMedias.forEach(media => photographerMedias.appendChild(media))
}

