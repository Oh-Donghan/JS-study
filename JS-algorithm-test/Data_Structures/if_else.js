let apple_price = 13;

if (apple_price >= 10) {
  // 10 ~
  console.log("very expensive :(");
} else if (apple_price < 5) {
  // ~ 5
  console.log("very cheap :)");
} else { 
  // 5 ~ 9
  console.log("nice!");
}

let age = 10;

if (age < 10) console.log("young!");
else console.log("old!");

console.log("__________");
//// 3항 연산자 비교 ////
let age1 = 20;

if (age1 < 19) {
  msg = "The user is not an adult";
} else {
  msg = "The user is an adult";
}
console.log(msg);

msg_another = (age1 < 19) ? "The user is not an adult" : "The user is an adult"; 
console.log(msg_another);