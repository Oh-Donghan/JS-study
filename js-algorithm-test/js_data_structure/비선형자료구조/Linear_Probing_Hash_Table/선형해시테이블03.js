const HASH_SIZE = 5; // 충돌 빈도를 증가시키기 위해 5로 변경

// Element() : Key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// LinearHashTable() : 생성자
function LinearHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hashCode() : 해시 함수
LinearHashTable.prototype.hashCode = function (key) {
  /* loselose 해시 함수 - 충돌확인을 위해 */
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// clear() : 초기화
LinearHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size() : 키기 변환
LinearHashTable.prototype.size = function () {
  return this.length;
};

// getBuffer() : 데이터 셋 반환
LinearHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array;
};

// print() : 데이터 셋 출력
LinearHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + ' -> ' + this.table[i].key + ': ' + this.table[i].value);
    }
  }
};

// put() : 데이터 추가
LinearHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  let startIndex = index;
  console.log(`key: ${key} -> index: ${index}`);

  do {
    if (this.table[index] === undefined) {
      this.table[index] = new Element(key, value);
      this.length++;

      return true;
    }
    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return false;
};

// get() : 데이터 조회
LinearHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return undefined;
};

let cht = new LinearHashTable();
cht.put('Ana', 172); // index 2
cht.put('John', 179); // index 4
cht.put('Donnie', 183); // index 0
cht.put('Mindy', 190); // index 3
cht.put('Paul', 168); // index 2 이기 때문에 while문을 돌아서 비어있는 1이 할당
// collision
console.log('');

console.log(cht.get('Ana'));
console.log(cht.get('Paul'));
console.log(cht.get('Kim'));






