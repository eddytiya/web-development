//this is asynchronous action

console.log("adi is a hacker")
console.log("adi is a hecker")

setTimeout(() =>{
    console.log("i am inside settimeout")
},2000);

setTimeout(() =>{
    console.log("i am inside settimeout2")
},2000);


console.log("the end")

// due to the asynchronous nature of js line1 and 2 will run
// but settimeout of 2 seconds line will be skipped and line 
// 8 will run and after 2 sec the settimeout will run

// callback matlab function k aandar function


const fn = () => {
    console.log("nothing")  
}

const callback=(arg,fn) => {
console.log(arg)
fn()  
}

const loadscript = (src,callback) => {
let sc = document.createElement("script");
sc.src=src;
sc.onload=callback("aditya",fn);  
document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)


