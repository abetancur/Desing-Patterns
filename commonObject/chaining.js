/*
Utility when self execute process an back
*/
var Calc = function (num) {
    this.add = function (x) {
        num = num + x;
        return this;
    }
    this.multiply = function (x) {
        num = num * x;
        return this;
    }
    this.subtract = function (x) {
        num = num - x;
        return this;
    }
    this.equals = function (callBack) {
        callBack(num);
        return this;
    }
}

new Calc(0)
    .add(2)
    .add(8)
    .multiply(2)
    .subtract(10)
    .equals(function (resultNum) {
        console.log(resultNum);
    });