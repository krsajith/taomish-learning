//default exports of common js 

import add from "./calc.mjs";
console.log(add(6,3));


//named exports of ES6 javascript 

import {sub,mul} from "./calc.mjs";
console.log(sub(6,3));
console.log(mul(6,3));
