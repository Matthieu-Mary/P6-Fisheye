async function getPhotographers() {
    const response = await fetch("../data/photographers.json")
    .then(res => res.json())
    .then(data => {
        const photographers = data.photographers;
        return photographers
    })       
    return { photographers:[...response] };
}       

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
    
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };
    
    async function init() {
        // Récupère les datas des photographes
        console.log("init lancé")
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
        
    init();



    