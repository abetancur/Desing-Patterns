/*
*The Factory pattern is another creational pattern concerned with the notion of creating objects.
* Where it differs from the other patterns in its category
* is that it doesn't explicitly require us use a constructor.
*/

// A constructor for defining new cars
function Car (options) {
    this.doors = options.doors || 4;
    this.color = options.color || 'red';
}

// A constructor for defining new trucks
function Truck (options) {
    this.wheelSize = options.wheelSize || 'large';
    this.color = options.color || 'blue';
}

function VehicleFactory() {};

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function (options) {
    switch (options.vehicleType) {
        case 'car' : {
            this.vehicleClass = Car;
            break;
        }
        case 'truck' : {
            this.vehicleClass = Truck;
            break;
        }
    }
    return new this.vehicleClass(options);
}

var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
    doors: 6,
    color: 'green',
    vehicleType: 'car'
});
console.log(car);
console.log(car instanceof Car);