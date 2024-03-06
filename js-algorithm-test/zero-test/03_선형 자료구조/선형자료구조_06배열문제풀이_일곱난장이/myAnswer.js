/* 일곱 난장이 */

/* user code */
function answer(dwarf) {
  let result = [];

  // 전부 더한 값 => sum
  let sum = dwarf.reduce((acc, ele) => {
    return acc + ele;
  },0);
  sum -= 100;
  console.log(sum);

  // faker 요소 찾기
  let faker = [];
  for (let i = 0; i < dwarf.length; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      if (dwarf[i] + dwarf[j] == sum) {
        faker = [dwarf[i], dwarf[j]];
      }
    }
  }

  // dwarf 배열에서 faker 배열을 제외한 값 리턴
  for (item of dwarf) {
    if (!(item === faker[0] || item === faker[1])) {
      result.push(item);
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [1, 5, 6, 7, 10, 12, 19, 29, 33],

  // TC: 2
  [25, 23, 11, 2, 18, 3, 28, 6, 37],

  // TC: 3
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
