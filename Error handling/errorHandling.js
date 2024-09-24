// Error = an object that is created to represent a problems that occurs.
//         Occur often with user input or establishing a connection.
//
// try { } = Encloses code that might potentially cause an error
// catch() { } = Catch and handle my throwing errors from try
// finally { } = (optional) Always executes used mostly for clean up
//                ex. close files, close connections, release resources

try {
    console.log('Hello');
    // NETWORK ERRORS
    // PROMISE REJECTIONS
    // SECURITY ERRORS
}
catch (error) {
    console.error(error);
}
finally {
    console.log('Always executes')
}
console.log('You have reached the end');

//------


try {
    const dividend = Number(window.prompt('Enter a dividend: '));
    const divisor = Number(window.prompt('Enter a divisor: '));

    if(isNaN(dividend) || isNaN(divisor)) {
        throw new Error('Dividend mus be a number')
    }
    if(divisor === 0) {
        throw new Error("Divisor can't be equal to 0" );
    }

    const result = dividend / divisor
    console.log(result);

} catch (error) {
    console.error(error);
}
console.log('You reached the END!')