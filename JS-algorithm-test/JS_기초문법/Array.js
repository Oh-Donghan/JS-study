//// 배열의 선언/접근/속성 ////

let arr_1 = new Array(10);  // ()안에 array 사이즈 지정 가능
let arr_2 = [];

console.log(arr_1);
console.log(arr_2);

let fruits = ["apple", "orange", "melon"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1] = "kiwi";
console.log(fruits);

console.log("***선언/접근/속성***");

//////////////////////////////////////////

//// 배열의 실체 ////
let nums = [];

nums[0] = "one";
nums[1] = "two";
console.log(nums.length);
console.log(nums);

nums["once"] = "once";
nums["twice"] = "twice";
console.log(nums.length);
console.log(nums);

console.log(Object.getOwnPropertyDescriptors(nums));

console.log("***배열의실체***");

//////////////////////////////////////

//// 배열 타입 확인 및 요소 삭제 ////
let num = 123.456;
let str = "here i am";
let fruits1 = ["apple", "orange", "melon"];

console.log(Array.isArray(num));
console.log(Array.isArray(str));
console.log(Array.isArray(fruits1));

console.log(fruits1, "length: ", fruits1.length);
// 배열의 삭제
delete fruits1[1];
console.log(fruits1, "length: ", fruits1.length);

console.log("***배열타입확인및요소삭제***");