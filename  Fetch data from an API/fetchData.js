
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

function fetchData() {

/*    try {
        const inputSprite = document.getElementById("inputSprite").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputSprite}`)

        if (!response.ok) {
            throw new Error(`Failed to fetch resource!!!`);
        }

        const data = await response.json();
        console.log(data)
        const spritePokemon = data.sprites.front_default;
        const imageOfPokemon = document.getElementById("imageOfPokemon")

        imageOfPokemon.src = spritePokemon;
        imageOfPokemon.style.display = "block";
    }
    catch (error) {
        console.error(error)
    }*/

    const inputSprite = document.getElementById("inputSprite").value.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputSprite}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Couldn't to fetch data");
            }
            return response.json()
        })
        .then(data => {
            const pokemonImage = document.getElementById("imageOfPokemon")
            pokemonImage.src = data.sprites.front_default
            pokemonImage.style.display = "block"
    })
    .catch(error => console.error(error));
}
