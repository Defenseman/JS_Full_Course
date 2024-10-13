// Promise = an object that manages a synchronous operations.
//           That Rob promise object around {asynchronous code}
//           I promise to return the value
//           PENDING -> RESOLVED or REJECTED
//           new Promise ((resolve, reject) => {asynchronous code})

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const action = true
            if (action) {
                resolve("You walked a dog!🐕");
            }else {
                reject("You DIDN'T walked a dog!❌");
            }
        }, 3000)
    })
}
function dishWash() {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {
             const washedDish = true
             if (washedDish) {
                 resolve("You washed the dishes")
             }else {
                 reject("You DIDN'T washed the dishes")
             }
        }, 2000);
    })
}
function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tookOutTrash = true
            if (tookOutTrash) {
                resolve("You threw out the trash")
            }else {
                reject("You DIDN'T took the trash")
            }
        },500)
    })
}

walkDog().then(value => {console.log(value); return dishWash()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You Finished!")})