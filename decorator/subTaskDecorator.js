var Task = function (name) {
    this.name = name;
}
Task.prototype.save = function () {
    console.log('Saving Task: ' + this.name);
}

var myTask = new Task('Legacy Task');
myTask.save();

var UrgentTask = function (name, priority) {
    Task.call(this, name);
    this.priority = priority;
}

var ut = new UrgentTask('This is urgent', 1);
console.log(ut);

