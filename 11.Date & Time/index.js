let currentdate=new Date();
console.log(currentdate);

console.log(currentdate.getFullYear());
console.log(currentdate.getMonth());

setInterval(() => {
    let now=new Date();
    console.log("Current Date :",now.getSeconds())
    
}, 1000);


setTimeout(() => {
    console.log("This is Run only once")
},2000);