// let person = {
//     name: "Mitali",
//     age: 22,
//     greetRegular: function(){
//         return `Hello, My name is ${this.name} and I'm ${this.age} years old`
//     }
// }
let person = {
    name: "Mitali",
    age: 22,
    greetRegular: function(){
        return `Hello, My name is ${this.name} and I'm ${this.age} years old`
    },
    greetArrow: () => {
        return `Hello, My name is ${this.name} and I'm ${this.age} years old`
    }
}

console.log(person.greetRegular());
console.log(person.greetArrow());