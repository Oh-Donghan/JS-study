// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// || 연산자는 값이 falshy한 경우 설정(할당): 0, -0, null, undefined, ''
// ?? -> null과 undefined 일 경우에만 설정(할당)
let num = 0;
console.log(num || '-1');
console.log(num ?? '-1');