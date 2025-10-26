console.log("We are building clock Project")


setInterval(()=>{
    const element=document.querySelector('.clock')

    const time =new Date()
//     const opt={
//     timezone : 'Asis/Kolkata',
//     hours : '2-Digit',
//     minute : '2-digit',
//     second : '2-digit'

// }
element.textContent = time.toLocaleTimeString();

},1000);