// Constructor function in Javascript are regular functions used with the new keyword to create and initialize objects with the shared properties and methods. They act as blueprints for creating multiple instances of objects with the same structure and behaviour

//NEW keyword :
// 1. First create empty object()
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using the "new" keywords

// function CreatePerson (name, age, gender){
//     this.name = name;
//     this.age = age;
//     this. gender = gender;
//     this.info = function(){
//         return `Hello, my name is ${this.name} and im ${this.age} years old ${this.gender}`
//     }
// }

// const mitali = new CreatePerson("Mitali", 22, "female")

// console.log(mitali.info());

function AboutCar(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.start = function(){
        return `starting the ${this.make} ${this.model}`
    };
    
    this.stop = function(){
        return `Stopping the ${this.make} ${this.model}...`
    };
}

const Toyota = new AboutCar("Toyota" , "Camry", 2001, "Red")
const Honda = new AboutCar("Honda" , "CR-V", 1998, "black")

console.log(Toyota.start());
console.log(Toyota.stop());
console.log(Honda.start());
console.log(Honda.stop());