//// Max, Min ////
console.log(Math.max(1, -1));  // 1
console.log(Math.min(1, -1));  // -1

console.log(Math.max(1, -1, 5, 23, 17, -4));  // 23
console.log(Math.min(1, -1, 5, 23, 17, -4));  // -4

// 배열에서 최대 최소값 구하기
let nums = [1, -1, 5, 23, 17, -4];
// apply - 배열을 인수로 받아 최대/최소를 산출하려면 apply 혹은 스프레드 문법 사용!
console.log("apply: ",Math.max.apply(null, nums));  // 23
console.log(`Min : ${Math.min.apply(null, nums)}`);  // -4
// ...spread - 더 많이 쓰인다
console.log(Math.max(...nums));  // 23
console.log(Math.min(...nums));  // -4

console.log("*** Max,Min ***");

//// ABS ////
console.log(Math.abs(1));  // 1
console.log(Math.abs(-1));  // 1
console.log(Math.abs(-Infinity));  // Infinity

console.log("*** ABS ***");

//// Math property - 둘다 무한대이지만 이 속성에선 제한을 두고 있다 (값 확인용)
console.log(Math.E); // 오일러상수
console.log(Math.PI); // 파이

//// Random ////
console.log(Math.random()); // 0과 1사이의 난수
// 1의자리의 랜덤 값을 구하고 싶을때는 * 10을 한다
// 그리고 parseInt로 정수로 바꾼다
// 10의자리 랜덤 값은 100을 곱하고 ...
console.log(Number.parseInt(Math.random() * 10));

// for loop로 랜덤값 확인하기
for (let i = 0; i < 10; i++) {
  console.log("for로 랜덤확인:", Number.parseInt(Math.random() * 10));
}

console.log("*** Random ***");

/* 제곱 : pow */
console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8

/* 제곱근 : sqrt */
// 어떤 수를 제곱하여 원래의 수를 얻을 때, 그 제곱한 수를 원래의 수로 되돌리는 연산
console.log("sqrt: ",Math.sqrt(4)); // 2
console.log("sqrt: ",Math.sqrt(2)); // 1.4142135623730951

/* 소수점 이하 올림 : round, ceil, floor */
// round - 소수점 이하 반올림 정수
console.log("round: ",Math.round(3.5)); // 4
console.log("round: ",Math.round(-2.3)); // -2
console.log("round: ",Math.round(-2.7)); // -3
// ceil - 소수점 이하 올림
console.log("ceil: ",Math.ceil(3.5)); // 4
console.log("ceil: ",Math.ceil(-2.3)); // -2
console.log("ceil: ",Math.ceil(-2.7)); // -2
// floor - 소수점 이하 내림
console.log("floor: ",Math.floor(3.7)); // 4
console.log("floor: ",Math.floor(-2.3)); // -3
console.log("floor: ",Math.floor(-2.7)); // -3

console.log("*** 제곱,제곱근,소수점 처리 ***");