/*** 1. 별별별 ***/

/* user code */
function answer(num) {
  let result = "";

  // 코드 구현 시작 영역

  for (let i = 0; i < num; i++){
    // console.log(i);
    result += "*";
  }

  // while 
  // let i = 0;
  // while ( i < num){
  //   result += "*";
  //   i++;
  // }

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  5,
  // TC: 2
  7,
  // TC: 3
  12,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
