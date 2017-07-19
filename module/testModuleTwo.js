var testModule = (function () {
    var privateCounter = 0;
    return {
        incrementCounter: function () {
            return privateCounter++;
        },
        resetCounter: function () {
            console.log('Counter value to reset: ' + privateCounter);
            privateCounter = 0;
        }
    }
})();
testModule.incrementCounter();
testModule.resetCounter();
