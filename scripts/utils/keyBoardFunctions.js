function enterKeyPressed(event){
    if (event.key === "Enter") {
        return true
    } else {
        return false
    }
}

function escapeKeyPressed(event) {
    if (event.key === "Escape") {
        return true
    } else {
        return false
    }
}

function leftArrowKeyPressed(event) {
    console.log(event.key)
    if (event.key === "ArrowLeft") {
        return true
    } else {
        return false
    }
}

function leftArrowKeyPressed(event) {
    if (event.key === "ArrowRight") {
        return true
    } else {
        return false
    }
}
