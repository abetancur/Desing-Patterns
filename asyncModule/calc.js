var Calc = function (start) {
    var self = this;
    this.add = function (x) {
        start = start + x;
        return self;
    }
    this.multiply = function (x) {
        start = start * x;
        return self;
    }
    this.equals = function (callBack) {
        callBack(start);
        return self;
    }
}

module.exports = {
    add: function (x, y) {
        return new Calc(x).add(y || 0);
    }
}