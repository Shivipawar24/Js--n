// primitive
// 7 types
// only copiend data we can get , not the original value change
// String, Number, Boolearn, Null, Undefined, Symbol, BigInt

const name = "shivi"
const num = 10;
const isLoggedIn = false 
const outsideTemp = null
let user ;

const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1===id2)

const bignum = 123457876543n

// reference -type , non primitive
// array, objects, function 

const arr = ["one", "two", "three"];
// objects
 let myobj = {
    name:"shivi",
    age: 22
}

// function 

 const myfun = function(){
    console.log("shivani");
}



