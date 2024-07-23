let arr=[1,13,5,7,11,]

// let newarr=[]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)    
// }

// the above thing can also be done by map function

let newarr=arr.map((e)=>{
    return e**2
})


console.log(newarr)
const greaterthenseven = (e)=>{
    if(e>7){
        return true
    }
    return false
}



console.log(arr.filter(greaterthenseven))