async function getPhotographers() {
    const response = await fetch("../data/photographers.json")
    .then(res => res.json())
    .then(data => {
        const photographers = data.photographers;
        return photographers
    })      
    .catch(error => console.log(error))  
    return { photographers:[...response] };
}       


