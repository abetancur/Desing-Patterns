var task = function (name) {
    this.name = name;
    this.completed = false;
}

task.prototype.completed = function () {
    console.log('Completing task: ' + task.name);
    this.completed = true;
}

task.prototype.save = function () {
    console.log('Saving task: ' + this.name);
}

module.exports = task;
