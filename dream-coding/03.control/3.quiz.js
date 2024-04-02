// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수라면 👎 출력

// if
if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}

// ternary
let result = num % 2 === 0 ? '👍' : '👎'; 
console.log(result);