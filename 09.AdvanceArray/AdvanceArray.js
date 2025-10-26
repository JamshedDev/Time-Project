// For-in
const car = { brand: "Tesla", model: "X", year: 2025 };
for (const key in car) {
  console.log(key+" "+car[key]);
}


const obj={name:"Jamshed",Age:20,Loc:"Delhi"};
for (let key in obj){
  // access only key
  console.log(key)
  // access key and value also
  console.log(key+" : "+obj[key]);
}


// For-of
const arr=[10,20,30]
for (let key of arr){
  console.log(key)
}


// ForEach()
let arr2=[10,20,30]
arr2.forEach((index,value)=>{
  console.log(index,value,arr2)
})