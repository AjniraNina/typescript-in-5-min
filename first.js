var a = 5;
var b = 5;
var c = a + b;
console.log(c);
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("this car is " + this.model);
    };
    return Car;
}());
var Prius = new Car('Prius', 4, true);
Prius.displayMake(); // This car is Prius
var Tesla = new Car('Tesla', 2, true);
Tesla.displayMake(); //this is Tesla
