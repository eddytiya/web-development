// let obj={
//     a:1,
//     b:"aditya"
// }

// console.log(obj)

// let animal={
//     eats : true
// };
// let rabbit={
//     jumps:true
// };

// rabbit.__proto__=animal;//sets rabbit.[[prototype]]=animationPlayState: 

class Animal{
    constructor(name){
        this.name=name
        console.log("object is created...")
    }
    eats(){
        console.log("kha raha hu")
    }
    jumps(){
        console.log("kud raha hu")
    }
}

//extends animal class in lion
class lion extends Animal {
    constructor(name){
        super(name)
        this.name=name
        console.log("object is created and he is a lion...")
    }
    //method overriding
    eats(){
        console.log("kha raha hu roar")
    }
}

let a = new Animal("bunny");
console.log(a)

let l=new lion("shera")
console.log(l)