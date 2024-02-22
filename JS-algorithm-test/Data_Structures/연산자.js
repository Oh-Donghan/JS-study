//// [산술 연산자] ////

// 덧셈 연산자 : +
console.log(31 + 10);
// 뺄셈 연산자 : - 
console.log(31 - 10);
// 곱셈 연산자 : *
console.log(31 * 10);
// 나눗셈 연산자 : /
console.log(31 / 10);
// 몫
console.log(parseInt(31 / 10));
// 나머지 연산자 : %
console.log(31 % 10);
// 거듭제곱 연산자 : **
console.log(2 ** 3);

console.log("_______________");

//// [대입 연산자] ////
let num_1 = 123;
let num_2 = 456;
let str_1 = "hello";
let str_2 = "world";

let num_3, str_3;
num_3 = num_1 + num_2;
str_3 = str_1 + str_2;

console.log(num_3);
console.log(str_3);

let num_4 = num_1 - num_2;
console.log(num_4);

console.log("_____________")

//// 복합 대입 연산자 ////
let num = 10;
// 변수 5가지를 동시에 선언하고
let result_1, result_2, result_3, result_4, result_5;
// 5가지 변수에 31을 동시에 할당
result_1 = result_2 = result_3 = result_4 = result_5 = 31;

// 복합 대입 연산자 : +=
result_1 += num; // result_1 = result_1 + num;
console.log(result_1);
// 복합 대입 연산자 : -=
result_2 -= num; // result_2 = result_2 - num;
console.log(result_2);
// 복합 대입 연산자 : *=
result_3 *= num; // result_3 = result_3 * num;
console.log(result_3);
// 복합 대입 연산자 : /=
result_4 /= num; // result_4 = result_4 / num;
console.log(result_4);
// 복합 대입 연산자 : %=
result_5 %= num; // result_5 = result_5 % num;
console.log(result_5);

console.log("____________");

//// 증감 연산자 ////
let number, result;

number = 10;
result = number++;
console.log(result);
console.log(number);

number = 10;
result = ++number;
console.log(result);
console.log(number);

number = 10;
result = number--; // 10
console.log(result);
console.log(number);

number = 10;
result = --number; // 9
console.log(result);
console.log(number);

