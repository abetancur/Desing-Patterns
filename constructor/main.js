var task = require('./task');
var task1 = new task('create task for modules');
var task2 = new task('create task for singleton');

task1.save();
task2.save();
