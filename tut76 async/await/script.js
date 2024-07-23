function getdata(){
     return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove(455)
        },3500);
     })
}

console.log("loading modules")

console.log("do something else")

console.log("load data")

let data = getdata()

data.then((v) => {
    console.log(data)
    console.log("process data")
    console.log("task 2") 
})

// console.log(data)


// //we want the below to wait until the data is loaded completely
// console.log("process data")
// console.log("task 2")