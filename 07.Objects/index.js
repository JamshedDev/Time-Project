const person={
    username:"Jamshed",
    age: 20,
    greet: function() {
        console.log("Welcome")
    }
}
const car={
    name:"BMW",
    color:"RED",
    price:"50L"
}

const car2={...car,name:"Volvo",color:"white"}



console.log(person.username)
console.log(person.age)
console.log(person.greet())

console.log(car)
console.log(car2)