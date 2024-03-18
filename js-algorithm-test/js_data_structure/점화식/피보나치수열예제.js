let result;

function recursive(number) {
  if (number == 1 || number == 0) {
    return number;
  }
  return recursive(number - 1) + recursive(number - 2);
}

result = recursive(5);
console.log(result); // 5 
// => 피보나치 수열중 5번째 값을 리턴하는 함수이다
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// 위의 피보나치 수열중 5번째 값은 5 이므로 5 출력!
// 피보나치 수열의 점화식은 f(n) = f(n - 1) + f(n - 2)
// f(5) = f(4) + f(3)
// f(4) = f(3) + f(2)
// f(3) = f(2) + f(1)
// f(2) = f(1) + f(0)
// f(1) = return number => 1 이므로 1
// f(0) = return number => 0 이므로 0