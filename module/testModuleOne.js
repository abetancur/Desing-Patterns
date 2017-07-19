/*
* Modules are an integral piece of any robust application's architecture and
* typically help in keeping the units of code for a project both cleanly
* separated and organized.
* Emulate the concept of classes in such a way that we're able to
* include both public/private methods and variables inside a single object
*/
var myModule = (function () {
    var privateCounter = 0;

    function privateFunction () {
        privateCounter++;
    }

    function publicFunction () {
        publicIncrement();
    }

    function publicIncrement () {
        privateFunction();
    }

    function publicGetCount () {
        return privateCounter;
    }

    return {
        star: publicFunction,
        increment: publicIncrement,
        count: publicGetCount
    }
})();
myModule.star();
myModule.increment();
myModule.increment();
console.log(myModule.count());
