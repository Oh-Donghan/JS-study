let input = ["a", "b", "c"]; // nPr   3P3
let count = 0;

// for문 예제
function permutation(arr) {
  // for i -> 첫번째 index 위치시킬 요소 a, b, c [i, 0, 0]
  for (let i = 0; i < arr.length; i++){
    // for j -> 두번째 index 위치시킬 요소 [i, j, 0]
    for (let j = 0; j < arr.length; j++){
      if (i == j) continue;
      // for k -> 세번째 index 위치시킬 요소 [i, j, k]
      for (let k = 0; k < arr.length; k++){
        if (i == k) continue;
        if (j == k) continue;

        console.log("for문: ",arr[i], arr[j], arr[k]);
        count++;
      }
    }
  }
}

permutation(input);
console.log("count: ",count);
console.log("**** for문 예제 끝 ****");

///////////////////////////////////////////////

let count1 = 0;
// 재귀 함수 예제
function permutation1 (arr, s, r) {
  // 1. 재귀함수를 멈춰야할 조건
  if (s == r) {
    count1++;
    console.log("재귀함수: ",arr.join(" "));
    return;
  }
  // 2. 재귀를 돌면서 변경되어야 될 부분/메인로직
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]]; // swap
    permutation1(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; // 원상복귀
  }
}

permutation1(input, 0, 2);
console.log("count1: ",count1);
console.log("**** 재귀함수 예제 끝 ****");