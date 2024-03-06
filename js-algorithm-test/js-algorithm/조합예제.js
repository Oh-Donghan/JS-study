let input = [1, 2, 3, 4]; // nCr -> 4C2
let count = 0;

// for문 예제
function combination(arr) {
  // for문 하나당 뽑는 개수 ==> r이 두개 => for문 2개
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      console.log(arr[i], arr[j]);
    }
  }
}
combination(input);
console.log("count: ",count);
console.log("**** for문 예제 끝 ****");

/////////////////////////////////////////////

// 재귀함수 예시
let output = [];
let count1 = 0;

function combination1(arr, data, s, idx, r) {
  // 1. 재귀함수가 멈춰야할 조건
  if (s == r) {
    count1++;
    console.log(data);
    return;
  }

  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combination1(arr, data, s + 1, i + 1, r);
  }
}
combination1(input, output, 0, 0, 2);
console.log("count1: ", count1);

console.log("**** 재귀함수 예제 끝 ****");