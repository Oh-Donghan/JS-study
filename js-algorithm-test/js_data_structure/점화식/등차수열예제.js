let result;

// for loop를 이용한 등차수열
function forloop(s, t, number) { // s : start(초기함수), t : 간격(등차값), number : 개수(얼마만큼 반복할지)
  let acc = 0;

  for (let i = 1; i <= number; i++) {
    if (i == 1) {
      acc += s;
    } else {
      acc += t;
    }
    console.log(i, acc);
  }
  return acc;
}

result = forloop(3, 2, 5);
console.log(result);
console.log("**** for loop 끝 ****");

/////////////////////////////////////////////

// 재귀함수를 이용한 등차수열
let result1;
function recursive(s, t, number) {
  // 멈출 조건
  if (number == 1) {
    return s;
  }
  // 반복할 코드
  return recursive(s, t, number -1) + t;
}

// number : 5, recursive(s, t, 5-1) + 2 => 9 + 2
// number : 4, recursive(s, t, 4-1) + 2 => 7 + 2
// number : 3, recursive(s, t, 3-1) + 2 => 5 + 2
// number : 2, recursive(s, t, 2-1) + 2 => 3 + 2
// number : 1 => return 3

result1 = recursive(3, 2, 5);
console.log(result1);

console.log("**** 재귀함수 끝 ****");