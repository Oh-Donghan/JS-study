//// sort 고차함수 ////
let nums = [1, -1, 4, 0, 10, 20, 12];
// sort() 메서드로 정렬될때 배열의 요소가 일시적으로 문자열이 되기때문에 순서가 
// 아래처럼 나온다
console.log(nums.sort());  // [-1, 0,  1, 10, 12, 2, 20, 41]
console.log(nums.reverse());  // [41, 20, 2, 12, 10,  1, 0, -1]

// sort() 함수의 매개변수로 함수를 넣어 고차함수를 이용한 정렬 수행 가능
// x = 1, y = -1 -> 0보다 큰값이니 위치가 바뀜 -> 결국 작은 숫자가 앞에 위치함
// x = -1, y = 1 -> 이런 식으로 비교를 해서 정렬을 해줌 (정렬 알고리즘)
let ascending_order = function (x, y) {
  return x - y;  // 0보다 큰값으로 반환될때 두값에 대한 위치가 바뀐다
}

// x = 12, y = 20 -> 양수가 되서 위치를 바꿈
// x = 20, y = 12
// y - x 를 하게 되면 큰값이 앞에 위치하게 된다
let descending_order = function (x, y) {
  return y - x;
}

console.log(nums.sort(ascending_order));  // [-1,  0,  1, 4, 10, 12, 20]
console.log(nums.sort(descending_order));  // [20, 12, 10, 4, 1,  0, -1]

console.log("***숫자 정렬 문제점***");

//////////////////////////////////////////////////

// 문자 정렬일때 대소문자 구분하여 정렬함
// 그걸 방지하려면 아래 함수를 매개변수로 넣어 고차함수를 만들면 됨

// 모두 대문자로 변경해서 정렬
let ascending_order1 = function(x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x > y) return 1;
  else if (y > x) return -1;
  else return 0;
}

// 모두 소문자로 변경해서 정렬
let descending_order1 = function(x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x < y) return 1;
  else if (y < x) return -1;
  else return 0;
}

let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort(ascending_order1));
console.log(fruits.reverse(descending_order1));

console.log("***문자 정렬 문제점***");

//////////////////////////////////////////////

//// 콜백 함수 ascending_order, descending_order 공용화 ////
// ascending과 descending 공용화 (위 두 예시들 합치기)
let ascending_order2 = function (x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();

  return x > y ? 1 : -1;
}
let descending_order2 = function (x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();
  
  return x < y ? 1 : -1;
}

let num2 = [1, -1, 4, 0, 10, 20, 12];  // case 1
let fruit2 = ["apple", "Orange", "orange", "melon"]; // case 2

console.log(num2.sort(ascending_order2));
console.log(num2.sort(descending_order2));
console.log(fruit2.sort(ascending_order2));
console.log(fruit2.sort(descending_order2));

console.log("***공용화하기***");