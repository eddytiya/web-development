console.log("tutorial on loops")

let a =1
// console.log(a)
// console.log(a+1)
// console.log(a+2)
// we can print till 10 or we can use loops

for (let i = 0; i < 100; i++) {
    console.log(a+i)
    
}


let obj={
    "name":"aditya",
    "role":"prog",
    "company":"adification"
}

// 2.forin
for (const key in obj) {
    // if (Obj.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
// }

//3.forof
for(const c of "aditya"){
 console.log(c)   
}


//5.while loops
i=0
while(i<=6){
    console.log(i)
    i++
}


let j=10
do{
    console.log(j)
    j++

}while(i<6)