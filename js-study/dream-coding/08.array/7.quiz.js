// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const solution1 = (array, from, to) => {
  return array.map((item) => (item === from ? to : item));
};
let input = ['🍌', '🍓', '🍇', '🍓'];
const result1 = solution1(input, '🍓', '🥝');

console.log('result1: ', { input, result1 });

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

const solution2 = (array, key) => {
  return array.filter((ele) => ele === key).length;

  // let count = 0;
  // array.filter(ele => {
  //   if (ele === key) count++;
  // });
  // return count;
};

input = ['🍌', '🥝', '🍇', '🥝'];
const result2 = solution2(input, '🥝');
console.log('result2: ', result2);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const solution3 = (arr1, arr2) => {
  return arr1.filter((ele) => arr2.includes(ele));
};

input = ['🍌', '🥝', '🍇'];
input2 = ['🍌', '🍓', '🍇', '🍓'];
console.log('result3: ', solution3(input, input2));

// 퀴즈 4
// 5보다 큰 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

const result4 = nums
  .filter((item) => item > 5)
  .reduce((avg, num, _, array) => avg + num / array.length, 0);
console.log('result4: ', result4);

// 내 풀이
// const solution4 = (array) => {
//   const result = array.filter(ele => ele > 5);
//   const sum = result.reduce((sum, ele) => sum += ele, 0);
//   return sum / result.length;
// }
// console.log('result4:', solution4(nums));
