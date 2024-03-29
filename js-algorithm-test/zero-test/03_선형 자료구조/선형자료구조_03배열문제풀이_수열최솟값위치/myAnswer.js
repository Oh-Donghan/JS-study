/* 수열 최소값 위치 */

/* user code */
function answer(nums) {
  let result = [];
  let min = Math.min(...nums);
  console.log("min:",min);

  nums.forEach((ele, idx) => {
    if (ele === min) {
      result.push(idx);
    }
  });

  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 10, 2],

  // TC: 2
  [4, 5, 7, 4, 8],

  // TC: 3
  [12, 11, 11, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
