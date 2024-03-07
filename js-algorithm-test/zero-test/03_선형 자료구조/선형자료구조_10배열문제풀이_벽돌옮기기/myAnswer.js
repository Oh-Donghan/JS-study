/* 벽돌 옮기기 */

/* user code */
function answer(blocks) {
  let result = 0;

  let sum = blocks.reduce((acc, ele) => {
    return acc + ele;
  }, 0);
  sum /= blocks.length;
  // console.log(sum);

  // 옮겨야할 벽돌 개수 = 현재 벽돌 높이 - 평균 벽돌 높이
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] > sum) {
      result += blocks[i] - sum;
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 4, 1, 7, 5],

  // TC: 2
  [12, 8, 10, 11, 9, 5, 8],

  // TC: 3
  [27, 14, 19, 11, 26, 25, 23, 15],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
