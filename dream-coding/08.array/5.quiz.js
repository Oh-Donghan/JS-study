// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const replace = (array, from, to) => {
  const newArr = Array.from(array);
  newArr.forEach((ele, idx) => {
    if (ele === from) {
      newArr[idx] = to;
    }
  });
  return newArr;
};

const array = ['🍌', '🍓', '🍇', '🍓'];
const answer = replace(array, '🍓', '🥝');
console.log(array);
console.log(answer);

// 내풀이 - 함수단위로 하지않음
// const arr1 = ['🍌', '🍓', '🍇', '🍓'];
// const newArr1 = Array.from(arr1);

// newArr1.forEach((item, index) => {
//   if (item === '🍓') {
//     newArr1[index] = '🥝';
//   }
// });
// console.log(arr1);
// console.log(newArr1);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
const arr2 = ['🍌', '🥝', '🍇', '🥝'];
const item = '🥝';

const returnFunc = (arr2, item) => {
  let count = 0;
  arr2.forEach((ele) => {
    if (ele === item) {
      count++;
    }
  });
  return count;
};

const result = returnFunc(arr2, item);
console.log(result);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const myAnswer = (arr3, arr4) => {
  return arr3.filter(ele => arr4.includes(ele));
}
// 만약 리턴문을 생략하고 싶다면 중괄호도 지우고 한줄로 작성해야 한다!!
// const myAnswer = (arr3, arr4) => arr3.filter(ele => arr4.includes(ele));

const arr3 = ['🍌', '🥝', '🍇'];
const arr4 = ['🍌', '🍓', '🍇', '🍓'];
console.log(myAnswer(arr3, arr4));


// 내풀이 - 함수 형식이 아님
// const arr3 = ['🍌', '🥝', '🍇'];
// const arr4 = ['🍌', '🍓', '🍇', '🍓'];

// const result1 = arr3.filter((ele) => arr4.includes(ele));
// console.log(result1);

// const result2 = [];
// for (let i = 0; i < arr3.length; i++) {
//   if (arr4.includes(arr3[i])) {
//     result2.push(arr3[i]);
//   }
// }
// console.log('result2: ', result2);
