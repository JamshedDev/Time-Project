const person={
    username:"Jamshed",
    age:25,
    Loc:"Delhi"
}
const smartphone={
    brand:"Samsung",
    Storage:"256GB",
    Ram:"8GB",
    price:20000,
    color:"Titanium",
}

// Copy Objects property into another
const car={
    name:"BMW",
    color:"RED",
    price:"50L"
}
const car2={...car,name:"Volvo",color:"white"}
const car3={...car,price:"10L",name:"Maruti"}


const final={...person,...smartphone,...car}
console.log(final)


