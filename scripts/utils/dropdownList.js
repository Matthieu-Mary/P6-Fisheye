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
}

function selectedOption(event, name) {
    const { currentTarget } = event;
    const dropdown = currentTarget.parentNode.parentNode;
    const button = dropdown.querySelector("button");
    button.textContent = name;
    dropdown.classList.toggle('active');

    async function sortMediasBySelectedOption() {
        const medias = await getMedias();
        console.log(medias)
        const allMedias = getAllMedias();

        // Likes for popularity sort
        const allLikesArr = [];
        allMedias.forEach(media => allLikesArr.push(Number(media.querySelector(".likes-number").textContent)));
        // Titles for alphabetic sort
        const allTitlesArr = [];
        allMedias.forEach(media => allTitlesArr.push(media.querySelector('.media-infos h3').textContent));

        switch(name) {
            case 'Popularité':
                console.log("les plus populaires");
                const sortedByPopularity = allLikesArr.sort((a, b) => b - a);
                console.log(sortedByPopularity)
                break;
            case "Date":
                console.log("Les Dates");
                break;
            case "Titre":
                console.log("Trie par Titres");
                const sortedByTitle = allTitlesArr.sort();
                console.log(sortedByTitle)
                break;
            default:
                console.log("Une erreur est survenue")
        }
    }
    sortMediasBySelectedOption()
}
