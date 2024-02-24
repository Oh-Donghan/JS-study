// 함수 호출
function print_add(x, y = 10) {
  console.log(x + y);
}

print_add(10);

console.log('____________');

// dynamic parameters
// arguments 라는 내부 변수가 있다
// 자주 쓰이진 않고 위 방법이 default
function print_min() {
  console.log(arguments[0] - arguments[1]);
}

print_min(10, 20);

console.log('____________');

// 함수 반환
function add(x, y) {
  return x + y;
  console.log("hello"); // return 후 코드는 수행되지 않음
}

let result = add(10, 20);
console.log(result);

function checkAge(age){
  // if 문
  // if (age >= 18) return true;
  // else return false;
  // 삼항 연산자
  return age >= 18 ? true : false;
}

console.log(checkAge(14));
console.log(checkAge(20));