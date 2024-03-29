/* 숫자 빈도수 구하기 */

/* user code */
function answer(s, e) {
  let result = [];

  // 0. 각 자릿수 별 index => 0
  for (let i = 0; i < 10; i++) {
    result[i] = 0;
  }

  // 1. s <= n <= e
  let num;
  for (let i = s; i <= e; i++) {
    num = i;
    // 2. n => %, /
    while (num != 0) {
      result[num % 10]++;
      num /= 10;
      num = parseInt(num);
    }
  }

  // let allArray = [];
  // for (let i = s; i <= e; i++) {
  //   allArray.push(i);
  // }
  
  return result;
}

/* main code */
let input = [
  // TC: 1
  [129, 137],

  // TC: 2
  [1412, 1918],

  // TC: 3
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
