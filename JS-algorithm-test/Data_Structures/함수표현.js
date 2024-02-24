// 함수 선언식 
function add_1(x, y) {
  return x + y;
}

// 함수 표현식
const add_2 = function (x, y) {
  return x + y;
}

// 화살표 함수
const add_3 = (x, y) => x + y;

const add_4 = add_1; // 4

console.log(add_4(1, 3));