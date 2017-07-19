/*
* Decorator to promote code re-use, the ability to add behavior to existing class
*/
var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.save = function () {
    console.log('Saving Task: ' + this.name);
}

var myTask = new Task('Legacy Task');
myTask.notify = function () {
    console.log('Notifying important people');
}

//Decorator overriden method save
myTask.save = function () {
    this.notify();
    Task.prototype.save.call(this);
}
myTask.save();