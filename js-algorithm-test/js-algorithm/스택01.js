// Stack() : 생성자 함수
function Stack(array) { // 연결리스트 처럼 디폴트를 해도됨 (다양한 방법이있다)
  this.array = array ? array : [];
};

// getBuffer() : 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty() : 객체 내 데이터 유무
Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
};

let stack = new Stack([1, 2, 3]);
console.log(stack);

let data = stack.getBuffer();
console.log(data);
console.log(data === stack.array); // false 값은 복사된것

console.log(stack.isEmpty()); // 현재 stack에 값이 있으므로 false
console.log(Object.getOwnPropertyDescriptors(Stack.prototype));