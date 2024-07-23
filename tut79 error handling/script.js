// let a =prompt("enter 1st number")

// let b =prompt("enter the 2nd number")

// let sum = a+b

// console.log("the hum is",sum)

// the above code is in string so to make ki work we need 
// to conver a and b into integer

// let a =prompt("enter 1st number")

// let b =prompt("enter the 2nd number")

// //for the values which throws errors
// if(isNaN(a)||isNaN(b)){
//     throw SyntaxError("the value entered is not a number")
// }

// let sum = parseInt(a) + parseInt(b)



// let x=1
// try{
// console.log("the hum is",sum*x)
// }catch(error){
//     console.log("error aa gaya bhai")
// }
// finally{
//     console.log("the rock is back at home")
// }


// function mein dalna hai


let a =prompt("enter 1st number")

let b =prompt("enter the 2nd number")

//for the values which throws errors
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("the value entered is not a number")
}

let sum = parseInt(a) + parseInt(b)


function main(){
    let x=1
    try{
    console.log("the hum is",sum*x)
    return true
    }
    catch(error){
        console.log("error aa gaya bhai")
        return false
    }
    finally{
        console.log("the rock is back at home")
    }
}