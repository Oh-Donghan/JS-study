//// 형 변환 : Number to String ////
let us = 1e-6;

console.log(us.toString(), typeof us.toString());
console.log(String(us), typeof String(us));
console.log(us, typeof (us + ""));

console.log("***형변환***")

//// 자리 수 표현 ////
let num_1 = 125.0;
let num_2 = 123.456;
console.log(num_1 - num_2);
// 소수의 자리 수 길이를 제한
console.log((num_1 - num_2).toFixed(3));
// 정수화 소수의 자리 수를 합한 길이로 제한
console.log((num_1 - num_2).toPrecision(3));

console.log("***자리수표현***");
///////////////////////////////////

//// 자료형 확인 ////
console.log(Number.isNaN(0.123));  // 숫자가 아니냐 : false -> 숫자다 
console.log(Number.isNaN(123 / "hi"));  // 숫자가 아니냐 : true -> 아니다
console.log(Number.isFinite(-123));  // 정상적인 유한수 인지
console.log(Number.isFinite(Infinity));  // 정상적인 유한수 인지
console.log(Number.isFinite("hello"));  // 정상적인 유한수 인지

console.log("***자료형 확인***");

//// 정수와 실수 형 변환 ////
console.log(Number.parseInt("125px"));
console.log(parseInt("125px"));  // JS에서는 자동으로 래퍼객체로 변환되기 때문에 둘이 같은 코드이다

console.log(Number.parseFloat("1.25em"));
console.log(typeof parseFloat("1.25em"));

console.log("***정수와실수형변환***")
``