/*** 4. ATM 기기 ***/

/* user code */
function answer(withdraw, total) {
  let result;

  if (withdraw < total) {
    if (withdraw % 5 == 0) {
      result = (total - withdraw) - 0.5;
    } else {
      result = total;
    }
  } else {
    result = total;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [40, 130.0],
  // TC: 2
  [33, 130.0],
  // TC: 3
  [300, 300.0],
  // TC: 4
  [75, 219.0]
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
