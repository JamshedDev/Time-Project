console.log("--Operators--")

// 1.Arithmatic Operators
let a=10
let b=20
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)


// Assigment Operators
let x=20
console.log(x)
// Comparison Operators
y=20
if (y>=20){
    if (y==20){
        console.log("Y is equal to 20")
    }
    else{
        console.log("Y is greater than 20")
    }
}
else{
    console.log("Y is less than 20")
}

let z=20
let d="20"
console.log(z==d)


// Logical Operators
username="jamshed"
age=20
if (username=="jamshed" && age==20){
    console.log("Login SuccessFull...")
}



// Ternary Operators
let mark=20
console.log(mark>40?"Pass":"Fail");

let q=10
let p=89
let f=40
console.log(q>p && q>f?`${q}is Greater`:p>f?`${p}is Greater`:`${f} is Greater`)