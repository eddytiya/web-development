let button =document.getElementById("btn")

// button.addEventListener("click",()=>{
//     alert("i was clicked")
// })

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


// button.addEventListener("click",()=>{
//     document.querySelector(".box").innerHTML="<b>the btn clicked </b>enjoy yay!"
// })

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="<b>the btn clicked </b>enjoy yay!"
})

button.addEventListener("contextmenu",()=>{
    alert("do not hack us by right click maddy")
})

button.addEventListener("keyup",(e)=>{
    console.log(e)
})