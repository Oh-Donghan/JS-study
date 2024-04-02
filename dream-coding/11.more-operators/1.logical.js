// 논리연산자 Logical Operator
// && (and) 그리고
// || (or) 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Ellie' };

if (obj1 && obj2) {
  console.log('둘다 true!');
}
console.log('');

let result = obj1 && obj2; // 앞의값이 true니까 뒤에 값이 할당
console.log(result);

result = obj1 || obj2; // 앞의값이 true니까 바로 앞의 값 할당 (뒤의 값 확인 불필요)
console.log(result);
console.log('');

// 활용예
// 조건이 truthy일때 && 무언가를 해야 할 경우
// 조건이 falshy일때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어');
  }
  animal.owner = '바뀐주인!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어');
  }
  animal.owner = '새로운주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);
console.log('');

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);
console.log('');

// null 또는 undefined인 경우를 확인할때
let item; // = { price: 1 };
const price = item && item.price; // item이 있다면 뒤에 값을 할당해라
console.log(price);
console.log('');

// 기본값을 설정
// default parameter -> 전달하지 않거나, undefined 설정
// || 연산자는 값이 falshy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'Hello'; // message가 없다면 뒤에 값을 할당해라
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);