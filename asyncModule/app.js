/*
For use modules need NodeJs
*/
var Calc = require('./calc.js');

Calc
    .add(0, 2)
    .multiply(3)
    .equals(function (result) {
        console.log(result);
    });
