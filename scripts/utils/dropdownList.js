function dropdown(event) {
    const button = event.currentTarget;
    const dropdown = button.parentNode;
    dropdown.classList.toggle('active');
    if (dropdown.classList.contains('active')) {
        button.setAttribute('aria-expanded', true);
    } else {
        button.setAttribute('aria-expanded', false);
    }
    
    // setTimeout( () => button.focus() , 50);
}

function selectedOption(event, name) {
    const { currentTarget } = event;
    const dropdown = currentTarget.parentNode.parentNode;
    const button = dropdown.querySelector("button");
    button.textContent = name;
    dropdown.classList.toggle('active');

    // const currentDropdown = dropdown.querySelectorAll(".dropdown-hide");
    // for (let i = 0; i < currentDropdown.length; i++) {
    //     currentDropdown[i].classList.remove("dropdown-hide");
    //     currentDropdown[i].setAttribute("aria-selected","false");
    // }
    
    // currentTarget.classList.add("dropdown-hide");
    // currentTarget.setAttribute("aria-selected","true");

    // dropdown.querySelector('button').textContent = dropdown.querySelector(`[data-value=${option}]`).textContent;

    // dropdown.classList.toggle('dropdown-open');
    // if (dropdown.classList.contains('dropdown-open')) {
    //     button.setAttribute('aria-expanded', true);
    // } else {
    //     button.setAttribute('aria-expanded', false);
    // }
    // dropdownList.setAttribute("aria-activedescendant",target.id);

    // orderWork();
    // setTimeout( () => dropdown.querySelector('button').focus() , 50);
    
}

// function orderWork() {
//     const photographWork = document.querySelector(".photograph-work");
//     let contentNodes = document.querySelectorAll('.thumb-imgfull');
//     const order = document.querySelector(".dropdown").dataset.value;
//     // Converti la nodelist en array, le call appelle la nodelist en tant que 'this' dans la méthode et array.prototype défini le type de 'this'
//     let content = Array.prototype.slice.call(contentNodes);
    
//     switch (order) {
//         case "popularity":
//             // De + à -
//             content.sort(
//                 function(item, nextItem){
//                     let firstNumber = parseInt(item.querySelector(".number-likes").textContent);
//                     let secondNumber = parseInt(nextItem.querySelector(".number-likes").textContent);
//                     return secondNumber - firstNumber;
//                 }
//             )
//             break;
//         case "date":
//             // De + à -
//             content.sort(
//                 function(item, nextItem){
//                     let firstString = item.querySelector("[data-date]").dataset.date;
//                     let secondString = nextItem.querySelector("[data-date]").dataset.date;
//                     return secondString.localeCompare(firstString);
//                 }
//             )
//             break;
//         case "title":
//             // De A à B
//             content.sort(
//                 function(item, nextItem){
//                     let firstString = item.querySelector(".thumb-imgfull>:nth-child(2)").textContent.toLowerCase();
//                     let secondString = nextItem.querySelector(".thumb-imgfull>:nth-child(2)").textContent.toLowerCase();
//                     return firstString.localeCompare(secondString);
//                 }
//             )
//             break;
//         default:
//             break;
//     }

//     photographWork.innerHTML = "";
//     content.forEach(item => photographWork.appendChild(item));
// }