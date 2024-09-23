// Synchronous = execute line by line consecutively in a sequential manner
//               code that waits for an operation to complete.

// Asynchronous = Allows multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handled with: Callbacks, Promises Async/Await

/*
setTimeout(() => console.log('Task 1'), 3000)

console.log('Task 2')
console.log('Task 3')
console.log('Task 4')
*/

function fnc1(callback) {
    console.log('Task 1')
    fnc2()
}

function fnc2() {
    console.log('Task 2')
    console.log('Task 3')
    console.log('Task 4')
}
//setTimeout(fnc1, 2000)

setTimeout(() => {console.log('Задача №1')
                                fnc2()}, 3000)