let a = 5;  
let b = 5;  
let c = a + b;

console.log(c);

class Car{
    //fields
    model: String;
    doors: Number; 
    isElectric: Boolean;

    constructor(model: String, doors:Number, isElectric: Boolean){
      this.model = model;
      this.doors = doors;
      this.isElectric= isElectric; 
    }
    displayMake():void{
        console.log(
         `this car is ${this.model}`);
    }
}


const Prius = new Car('Prius', 4, true);  
Prius.displayMake(); // This car is Prius

const Tesla = new Car ('Tesla', 2, true);
Tesla.displayMake(); //this is Tesla

interface ICar {  
    model: String,  
    make: String,  
    display(): void  
  }
