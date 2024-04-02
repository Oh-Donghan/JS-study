// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']

// console.log([...new Set(fruits)]);

// 함수로 만들기
const removeDuplication = (array => {
  return [...new Set(array)];
});
console.log(removeDuplication(fruits));

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

const findIntersection = ((set1, set2) => {
  return new Set([...set1].filter(ele => set2.has(ele)));
});

console.log(findIntersection(set1, set2));


// const newSet = new Set();

// set1.forEach((ele) => {
//   if (set2.has(ele)) {
//     newSet.add(ele);
//   }
// });
// console.log(newSet);