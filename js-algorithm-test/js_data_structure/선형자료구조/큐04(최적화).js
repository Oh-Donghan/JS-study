// Queue() : 생성자 함수로 초기 데이터 설정
function Queue(array) {
  this.array = array ? array : [];
  this.tail = array ? array.length : 0;
  this.head = 0;
};

// enqueue() : 데이터 추가
Queue.prototype.enqueue = function(element) {
  return (this.array[this.tail++] = element);
};

// dequeue() : 데이터 삭제
Queue.prototype.dequeue = function() {
  if (this.tail === this.head) return undefined;

  let element = this.array[this.head];
  delete this.array[this.head++];
  return element;
};

// clear() : 큐 초기화
Queue.prototype.clear = function() {
  this.array = [];
};

let queue = new Queue([1, 2]);
console.log(queue);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
