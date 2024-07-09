
function setNotification(set) {
    localStorage.setItem("notification", set)
}

setNotification("Labas pasauli")


function getNotification() {
    return localStorage.getItem("notification")
}

alert(getNotification())

















