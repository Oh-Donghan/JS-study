// 배열
const data = [1, 2, 3, 'Dong', true];
console.log(data);
console.log(data.length);

console.log("***end***");

// new Array를 통해 객체처럼 생성도 가능
const myArray = new Array();

myArray[0] = 1;
myArray[1] = 2;
console.log(myArray[0], myArray[1], myArray[myArray.length -1]);
// 배열 수정하기
myArray[1] = "fun-coding";
console.log(myArray[myArray.length -1])

console.log("***end***");

// 배열 삭제 splice()
const data1 = [1, 2, 3, 'Dong', 'fun-coding'];

console.log(data1);
// splice(a, b) -> 배열의 a번 부터 b개 까지 삭제
data1.splice(1, 3);
console.log(data1);

console.log("***end***");

//// 특별한 형태의 javascript 배열 ////
const data2 = [1, 2, 3, 'han', null];

const data3  = [
  { name : 'dong_oh', age : 30 },
  { name : 'Alex', age : 20 }
];

const data4 = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log(data2[3]);
console.log(data3[0].name);
console.log(data4[0][2]);

console.log("***end***");