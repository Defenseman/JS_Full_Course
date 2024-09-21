const cards = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K'];

shuffle(cards)

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
        console.log(array)
}

//Decrease way

function shuffle2(array) {
    for (let i = 0; i < array.length - 1; i++) {
        const card = Math.floor(Math.random() * (array.length));
        [array[i], array[card]] = [array[card], array[i]];
    }
    console.log(array)
}
