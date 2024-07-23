let rand =Math.random()
let first,second,third
if (rand<0.33){
    first="crazy"
}
else if(rand<0.66 && rand>=0.33){
    first="Amazing"
}
else{
    first="fire"
}

//lets generate 2nd word
if (rand<0.33){
    second="engine"
}
else if(rand<0.66 && rand>=0.33){
    second="food"
}
else{
    second="garment"
}
//3ed word
if (rand<0.33){
    third="bros"
}
else if(rand<0.66 && rand>=0.33){
    third="limited"
}
else{
    third="hub"
}

console.log(`${first} ${second} ${third}`)