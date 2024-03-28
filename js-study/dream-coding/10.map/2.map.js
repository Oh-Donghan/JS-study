const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key6'));
console.log('');

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
console.log('');
// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key5'));
console.log('');
// 추가
map.set('key3', '🥝');
console.log(map);
console.log('');
// 삭제
map.delete('key3');
console.log(map);
console.log('');
// 전부삭제
map.clear();
console.log(map);
console.log('');

// 오브젝트와의 큰 차이점??
// Object
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는우유' };
const obj = {
  [key]: milk,
};
console.log("Object: ",obj);
console.log('');
// Map
const map2 = new Map([[key, milk]]);
console.log("Map: ", map2);
console.log('');
console.log(obj[key]); // { name: 'milk', price: 10, description: '맛있는우유' }
console.log(map2[key]); // undefined
console.log(map2.get(key)); // { name: 'milk', price: 10, description: '맛있는우유' }

