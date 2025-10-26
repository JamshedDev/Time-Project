// Map()
// Multiple By 2 in array
let arr=[1,2,3,4];
let doubled=arr.map((n)=>n*2+1);
console.log(doubled)

// Filter
// find even number
let even=arr.filter((n)=>n%2==0);
console.log(even)

// Find Odd
let odd=arr.filter((n)=>n%2!=0);
let odd1=doubled.filter((n)=>n%2!=0);
console.log(odd)
console.log(odd1)

// Reduce()
// Add all the number in array
let add=doubled.reduce((a,b)=>a+b);
console.log(add)