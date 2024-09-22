// Closure = A function defined inside another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance.
//           Used frequently in JS Frameworks: React, Vue, Angular.

function outer() {

    let hello = 'Hello';
    function inner() {
        console.log(hello);
    }
    inner()
}
outer()

//---------
function counter() {
    let count = 0;
    function increase() {
        count++
        console.log(count)
    }
    function getCurrCount() {
        return count;
    }

    return {increase: increase, getCurrCount};
}

const displayCount = counter()

displayCount.increase();
displayCount.increase();
console.log(`The current count is ${displayCount.getCurrCount()}`);

//---------

function createGame() {
    let score = 0;

    function increase(points) {
        score += points
        console.log(`Plus ${points}pts`);
    }
    function decrease(points) {
        score -= points;
        console.log(`Minus ${points}pts`)
    }
    function result() {
        return score;
    }

    return {increase, decrease, result};
}

const game = createGame();

game.increase(5)
game.decrease(2)
console.log(`The final score is ${game.result()}pts`);
