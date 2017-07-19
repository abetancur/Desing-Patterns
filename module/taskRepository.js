var repo = function () {
    return {
        get: function (id) {
            console.log('Getting task ' + id);
            return {
                name: 'new task'
            }
        },
        save: function (task) {
            console.log('Saving ' + task.name + ' to the db');
        }
    }
}

module.exports = repo();
