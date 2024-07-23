/*

create  a faulty calculator in javascript
this calc does following:
1.it takes two numbers as input from the user
2.it performs wrong operations as follows

+ -- -> -
* ----> +
- ----> /
/ ----> **


it performs wrong operations 10% of the TimeRanges

*/

let random = Math.random()
let a = prompt("enter the first number")
let b =prompt("enter the second number")
let c =prompt("enter the operation")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}


if(random>0.1){
//perform correct calculation
alert(`the result is ${eval(`${a} ${c} ${b}`)}`)

}
else{
    //perform wrong calculation
c=obj[c]
alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}