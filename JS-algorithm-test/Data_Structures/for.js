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



// for문 종류/사용
console.log("____________");

let arr = [1,2,3,4,5];

for (let item of arr) {
  console.log("for of :::",item);
}

let str = "Hello";

for (let char of str) {
  console.log("for of 문자열 :::",char);
}

for (let i = 0; i < str.length; i++){
  console.log("for문 :::",i);
}

for (let item in str) {
  console.log("for in 문 문자열 :::",item, typeof item);
}

let str2 = [1, 2, 3, 4, 5];

str2.forEach((ele, idx) => {
  console.log("forEach 메서드 배열 ",ele, typeof ele, ":::", idx, typeof idx);
});