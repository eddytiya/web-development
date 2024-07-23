console.log("this is a tutorial on array")

let arr=[1,2,4,5,7]
// index:0,1,2,3,4

console.log(arr)
// console.log(arr.length)

// //index/slicing
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[3])

// // /manupulating the array
// arr[0]=5666
// console.log(arr)

// console.log(typeof arr)

//converting it to a string
console.log(arr.toString())

//join method
console.log(arr.join(" and "))

//removing the element
console.log(arr.pop(7))
console.log(arr)

//adding element
arr.push(7)
arr.push("aditya")
console.log(arr)

//shift pop ka bhai hota hai 
// arr ka first element nikalne mein kaam aata hai
//unshift push ka bhai hai first element add hoga

let a1 =[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]

console.log(a1.concat(a2,a3))

//sort method
console.log(a1.sort())

//splice
let numbers=[1,2,3,4,5]
console.log(numbers.splice(1,2))
console.log(numbers.splice(1,3))


//slice
let num =[0,1,2,3,4,5,6,7,8,9]
console.log(num.slice(5))