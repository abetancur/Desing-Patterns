function myFunc(a, b, c) {
    return a + b + c;
}

console.log(myFunc(1,2,3));
console.log(myFunc(1,2,3,4)); //undefined
console.log(myFunc(1,2)); //NaN

//CallBack
function MyCall(callBack) {
    callBack();
}

MyCall(function() {
    console.log("Terminar la ejecucion");
});