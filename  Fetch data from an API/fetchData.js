
/*
function spritePokemon() {

}

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch resource`);
        }
        return response.json();
    })
    .then(data => {console.log(data)})
    .catch(error => console.log(error));

*/

async function fetchData() {

    try {
        const inputSprite = document.getElementById("inputSprite").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputSprite}`)

        if (!response.ok) {
            throw new Error(`Failed to fetch resource!!!`);
        }

        const data = await response.json();
        console.log(data)
        const spritePokemon = data.sprites.front_shiny;
        const imageOfPokemon = document.getElementById("imageOfPokemon")

        imageOfPokemon.src = spritePokemon;
        imageOfPokemon.style.display = "block";
    }
    catch (error) {
        console.error(error)
    }
}
