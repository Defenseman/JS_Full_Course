const warrior = document.getElementById("warriorPicture");
const btn = document.getElementById("btn");

/*function changeFnc() {
    if (warrior.style.visibility === 'hidden') {
        warrior.style.visibility = "visible";
        btn.textContent = "Hide";
    }else {
        warrior.style.visibility = 'hidden'
        btn.textContent = "Show";
    }
}
btn.addEventListener("click", changeFnc);*/

btn.addEventListener("click", event => {
    if (warrior.style.visibility === 'visible') {
        warrior.style.visibility = "hidden";
        btn.textContent = "Show";
    }else {
        warrior.style.visibility = 'visible'
        btn.textContent = "Hide";
    }
});