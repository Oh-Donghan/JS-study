for (let i = 0; i < 3; i++){
  console.log(i);
}
// 0, 1, 2

let num = 0;
for (; num < 2; ){
  console.log(num);
  num++;
}
// num++ 가없으면 무한 루프에 빠짐 
console.log("_________________");

//// 2중 for문 ////
for (let i = 0; i < 3; i++){
  for (let j = 0; j < 3; j++){
    console.log(`${i} + ${j} = ${i + j}`);
  }
}
console.log("______________");

//// for of ////
let language = "Javascript";
let text = "";

for (let x of language){
  text += x;
  console.log(x);
}
console.log(text);