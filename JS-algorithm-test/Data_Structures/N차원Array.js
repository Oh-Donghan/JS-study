let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]
console.log(array[0]); // [ 101, 102, 103 ]
console.log(array[1][0]); // 201
console.log(array[2][2]); // 303

let arr_2 = array.pop();
console.log(array.length); // 2
console.log(arr_2); // [ 301, 302, 303 ]
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ] ]

let array_num = array.push([401, 402, 403]);
console.log(array.length); // 3
console.log(array_num); // 3 - return value는 length를 반환한다!
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]

console.log("*** 2차원 배열 ***");

/////////////////////////////////////////////
/* 차원 배열 반복문 예제 - 2중 for loop를 사용함 */
let array1 = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array1[i].length; j++) {
    console.log(`${i}: ${array1[i][j]}`);
  }
}

let fruits = [
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
];

for (let i = 0; i < fruits.length; i++) {
  console.log(`fruits: ${fruits[i][0]}, amount: ${fruits[i][1]}`);
}

console.log("*** 2차원배열반복문예제 ***");