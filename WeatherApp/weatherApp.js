const weatherForm = document.querySelector('.weatherForm')
const cityInput = document.querySelector('.cityInput')
const card = document.querySelector('.card')
const apiKey = '49951a5cbb3ac2d97202bada4405e2ae'

weatherForm.addEventListener("submit", event => {

    event.preventDefault();

    const city = cityInput.value

    if(city) {

    }
    else {
        displayError("Please enter a city")
    }
});

async function getWeatherData(city) {

}

function getWeatherInfo(data) {

}

function getWeatherEmoji(weatherId) {

}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}