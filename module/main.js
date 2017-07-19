var task = require('./task');
var Repo = require('./taskRepository');

var task1 = new task(Repo.get(1));
var task2 = new task({name : 'create task for singleton'});
var task3 = new task({name :'create task for singleton'});

task1.save();
task2.save();
task3.save();
