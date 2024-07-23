console.log('this is promise')
console.log('')

let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("no random number was not supporting you")
    }
    else{


    setTimeout(() => {
        console.log("yes i am done")
        resolve("harry")
    }, 3000);
   }
})


prom1.then((a)=>{
    console.log(a)
}).catch((error)=>{
    console.log(error)
});