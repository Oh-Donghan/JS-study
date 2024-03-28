// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.

// null 또는 undefined인 경우를 확인할때
let item = { price: 1 };
const price = item?.price; // item이 있다면 뒤에 값을 할당해라
console.log(price);
console.log('');

let obj = { name: '🐶', owner: { name: '엘리' } };
function printName(obj) {
  // const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj);