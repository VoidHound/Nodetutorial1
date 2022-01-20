//CommonJS, every file is a module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('./names');
const sayHi = require('./utils');
const data = require('./exportAsYouGo');
require('./mindGrenade');

console.log(data);

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);