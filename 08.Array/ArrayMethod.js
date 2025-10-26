// Push()
let arr=[1,2,3]
arr.push(4,7)
console.log(arr)


// Pop()
arr.pop(3)
console.log(arr)


// shift()
arr.shift()
console.log(arr)


// Unshift
arr.unshift(9,8)
console.log(arr)

let arr1=["Jamshed",12,1,2,231,12312,3,23,213,21,31]
console.log(arr1.length)
console.log(arr1.includes(100000))


// length
// Concat
let arr2=[10,20]
let arr3=[30,40]
let combine=arr2.concat(arr3)
console.log(combine)

// Join()
let arrname=['apple','banana','cherry']
let Joined=arrname.join(",")
console.log(Joined)


// Splice()
arr2.splice(1,1,"Jamshed")
console.log(arr2)


// from()
let str="Jamshed"
let arr5=Array.from(str)
console.log(arr5)