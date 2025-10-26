let Global_var="this is Global Variable"

function display(){
    console.log(`Global_var Inside the function...${Global_var}`)
}
display()
console.log(`In global Function...${Global_var}`)


if (true){
    let blockvar=10
    console.log(blockvar)
}
// here blockvar cannot be access outside the block function
// console.log(blockvar)