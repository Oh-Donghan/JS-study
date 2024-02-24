// 값을 하나씩 줄여가면서 0일때 종료하는 재귀 함수
function recursive(num) {
  if (num == 0) return;
  console.log(num);
  recursive(num - 1);
}

recursive(3);

console.log('__________');

// 반복하면서 값을 전부 더하는 재귀 함수
function recu(num) {
  if (num == 0) return 0;
  return num + recu(num - 1);
}
// 3 + (2 + (1 + 0)) -> 6
console.log(recu(3));

// factorial -> 1씩 내려가며 곱해주는 연산
function factorial(x) {
  if (x == 0) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(4));


// 재귀함수는 while문 처럼 제한하는 값을 넣지 않으면 
// 무한 루프에 빠져 stack overflow가 발생한다
// 예시 코드)
// function recursive(num) {
//   recursive(num);
// }
// recursive(3);