// for loop
let result;

function forloop(s, t, number) {
  let acc = 1;
  for (let i = 1; i <= number; i++) {
    if (i == 1) {
      acc *= s;
    } else {
      acc *= t;
    }
    console.log(i, acc);
  }
  return acc;
}

result = forloop(3, 2, 5);
console.log(result);
console.log("**** for loop 끝 ****");

////////////////////////////////////////

// 재귀함수
let result1;

function recursive(s, t, number) {
  if (number == 1) {
    return s;
  }
  return recursive(s, t, number - 1) * t;
}

result1 = recursive(3, 2, 5);
console.log(result1);

console.log("**** 재귀함수 끝 ****");