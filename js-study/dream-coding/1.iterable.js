// Iterable 하다는건! 순회가 가능하다는 것!
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
// 순회 가능한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for...of, spread
const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}
console.log('');

// const obj = { 0: 1, 1: 2 }; // 객체는 iterator가 없으므로 에러
// for (const item of obj) {
//   console.log(item);
// }
const obj = { 0: 1, 1: 2 };
for (const item in obj) { // key를 출력
  console.log(item);
}
console.log('');


const iterator = array.values(); // value는 값 done은 순회가 끝났는지
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().done);
while(true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}