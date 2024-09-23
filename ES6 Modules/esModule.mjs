// ES6 Module = An external file that contains reusable code
//              that can be imported into other JavaScript files.
//              Write reusable code for many different apps.
//              Can contain variables, classes, functions ... and more
//              introduced as part of ECMAscript 2015 update

import {PI, getCircumference, getArea, getVolume, getSurfaceVolume} from "./mathUtil.mjs"

console.log(PI);

const circumference = getCircumference(10);
console.log(circumference.toFixed(2));

console.log(getArea(10).toFixed(2));

const volume = getVolume(10);
console.log(volume.toFixed(2));

const surfaceVolume = getSurfaceVolume(volume.toFixed(2));
console.log(surfaceVolume.toFixed(2));