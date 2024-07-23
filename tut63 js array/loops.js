let a = [1,93,5,6,88]

//1.normal for loop
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)   
}

//2.for each
a.forEach((value,index,arr) => {
    console.log(value,index,arr)
    
});


let obj={
    a:1,
    b:2,
    c:3
}

//3.forin
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}

for (const value of a) {
    
    console.log(value)
}