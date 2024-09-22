// setTimeout() = function in JavaScript that allows уоu to schedule
//                the execution of а function after аn amount of time (in milliseconds)
//                Times аре approximate (varies based оп the workload of the JavaScript runtime env.)
//                setTimeout(callback, delay);

function hello() {
    console.log("Hello!");
}
setTimeout(hello, 2000);

setTimeout(function () { console.log("Hello!!"); }, 2500);
setTimeout(() => { console.log("Hello!!!"); }, 3000);

// set Timeout(callback, delay);
// clearTimeout(timeoutId) = can cancel a timeout before it triggers

let timeoutId;  //You can assign any variable

function start() {
    timeoutId = setTimeout(() => {window.alert('Hello world!'); }, 3000)
    console.log('Started');
}

function finish() {
    clearTimeout(timeoutId);
    console.log('Finished')
}