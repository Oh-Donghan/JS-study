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

// push() : 데이터 추가
Stack.prototype.push = function(element) {
  return this.array.push(element);
};

// pop() : 데이터 삭제
Stack.prototype.pop = function() {
  return this.array.pop();
};

// peek() : 가장 끝 데이터 반환
Stack.prototype.peek = function() {
  return this.array[this.array.length - 1];
};

// size() : 스택 내 데이터 개수 확인
Stack.prototype.size = function() {
  return this.array.length;
};

let stack = new Stack([1, 2]);
console.log(stack);
stack.push(3);
console.log(stack);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
