/*
 * Hoisted
 * In JavaScript, a variable can be declared after it been used.
 * In other words, a variable can be used before it has been declared.
 */
x = 5;
var y = 2;
var result = x + y;
var x;
console.log(result);

/**
 * Hoisting
 * Default behavior of moving all declarations to the top of the current scope
 */
var x;
x = 5;
var y = 2;
var result = x + y;
console.log(result);
