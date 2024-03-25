const num1 = 123;
const num2 = new Number(123); // 메모리 낭비
console.log(num1); // 원시타입 number
console.log(num2); // object

console.log(Number.MAX_VALUE); // 정수중 가장 큰 숫자 e+308 -> 10의 308승
console.log(Number.MIN_VALUE); // 정수중 최소값
console.log(Number.MAX_SAFE_INTEGER); // 안전하게 나타낼수 있는 가장 큰 정수
console.log(Number.MIN_SAFE_INTEGER); // 안전하게 나타낼수 있는 가장 작은 정수
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2 -> e+2는 10의 2승

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toString()); // 문자열로 반환
console.log(num4.toLocaleString('ar-EG')); // 숫자를 그나라 지역 언어에 맞게 보여지게 한다
// 값에 아무것도 쓰지 않으면 단위에 .을 찍어준다
const bigNum = 123123123123123;
console.log(bigNum.toLocaleString()); // 123,123,123,123,123

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // 1234.1
console.log(num4.toPrecision(4)); // 1234
console.log(num4.toPrecision(2)); // 1.2e+3 -> 전체 자릿수 표기가 안될때는 지수표기법

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}

const num = 0.1 + 0.2 - 0.2;
console.log(num); // 0.10000000000000003

function isEqual(original, expected) {
  // return original === expected;
  return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));