const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalSlide = null;

document.addEventListener("DOMContentLoaded", initialSlider)

function initialSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide")
        intervalSlide = setInterval(nextSlide, 5000)
    }
}
function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }else if(index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
    clearInterval(intervalSlide)
    slideIndex--
    showSlide(slideIndex)
}
function nextSlide() {
    slideIndex++
    showSlide(slideIndex)
}