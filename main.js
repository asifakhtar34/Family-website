let navToggleStatus = false;

let toggleBar = function () {
    

let getAside = document.querySelector(".aside");
let getAsideUl = document.querySelector(".aside ul ");
let getAsideLinks = document.querySelectorAll(".aside a");

if (navToggleStatus === false) {

    getAsideUl.style.visibility = "visible";
    getAside.style.width = "300px";

    let arrayLength = getAsideLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        getAsideLinks[i].style.opacity = "1";
    }

    navToggleStatus = true;


} else {
    getAside.style.visibility = "visible";
    getAside.style.width = "70px";

    let arrayLength = getAsideLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        getAsideLinks[i].style.opacity = "0";
    }

    navToggleStatus = false;


}
}
