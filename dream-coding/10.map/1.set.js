// Set은 순서가 없는 집합체이다! (중복 불가❌)
const set = new Set([1, 2, 3]);
console.log(set);
console.log('');

// 사이즈 확인
console.log(set.size);
console.log('');

// 존재하는지 확인
console.log(set.has(2)); // true
console.log(set.has(6)); // false
console.log('');

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}
console.log('');

// 추가 -> set은 중복 ❌
set.add(6);
console.log(set);
set.add(6);
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);
console.log('');

// 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs);

// 퀴즈
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs);
// 새로운 객체 주소가 할당되기 때문에 
// 중복이 아니다!
// Set(3) {
//   { name: '🍎', price: 10 },
//   { name: '🍌', price: 5 },
//   { name: '🍌', price: 5 }
// }