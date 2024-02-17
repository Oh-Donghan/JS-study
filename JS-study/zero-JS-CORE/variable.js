// js 기초 - 변수

// var - scope
var cat = "야옹";

function newFunction(){
  var dog = "멍멍";
}
console.log(cat); 
// console.log(dog); // error

///////////////////////////
// var - hoisting
console.log(greeter);
greeter = "say hey~~";
console.log(greeter);

var greeter = "say hohoho!!";
console.log(greeter);