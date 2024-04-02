// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능 
// 변경이 불가능한게 아니라 객체가 할당된 메모리주소를 변경할 수 없다는 뜻
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {};
console.log(apple);
apple.name = 'orange';
console.log(apple);
apple.display = '🍊';
console.log(apple);