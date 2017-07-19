/*
* Restricts instantiation of class to a single objects
*/
var mySingleton = (function () {
    var instance;
    function init() {
        var instance = new Object("Task");
        return instance;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
                console.log('Create new instance');
                return instance;
            }
            console.log('Return instance');
            return instance;
        }
    }
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
