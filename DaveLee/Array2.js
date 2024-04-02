//// 다양한 배열 관련 기능 (함수) ////
// push 배열의 끝에 아이템 추가
const data = [1, 2, 3];
data.push('Dong');
console.log(data);

console.log("***end***");

// pop 배열의 끝에 있는 아이템을 리턴해주고, 해당 아이템은 배열에서 삭제
console.log(data.pop());
console.log(data);

console.log("***end***");

// shift 배열의 첫 번째 아이템을 삭제하고, 뒤에 있는 아이템을 앞으로 당김
data.shift();
console.log(data);

console.log("***end***");

// concat 두 배열 합치기
const data1 = [1, 2, 3];
const data2 = ['a', 'b', 'c'];
const data3 = data1.concat(data2);
const dataCopy = [...data1, ...data2];
console.log(data3);
console.log("dataCopy ::: ", dataCopy);

console.log("***end***");

// join 아이템 사이에 특정 문자열을 넣어서, 모든 아이템을 합쳐 하나의 문자열로 만듬
const data4 = [1, 2, 3, 4, 5, 6];
let data5 = data4.join('*');
console.log(data5, ":::", typeof data5);

console.log("***end***");

// reverse 배열을 역순으로 배치
// 함수 호출시 역순으로 배치한 배열을 리턴하는 것이 아니라, 현재 배열을 변경함
const data6 = [1, 2, 3, 4, 5];
data6.reverse();
console.log(data6);

console.log("***end***");

// slice 배열의 일부분 반환
// slice(a, b) 배열의 a번 부터 시작해서, b - 1 아이템 인덱스까지 추출
const data7 = [1, 2, 'Dave', 100];
let data8 = data7.slice(1, 3);
console.log(data8);

console.log("***end***");

// forEach for문을 대체해서, 간단히 배열의 각 아이템을 가져올 수 있는 함수
const data9 = [1, 2, 3, 4, 5, ,6];
data9.forEach(item => {
  console.log(item);
});

console.log("***end***");

// map 배열의 각 아이템에 정의한 함수를 적용해서, 새로운 배열을 리턴하는 함수
const data10 = [1, 2, 3, 4, 5];
const data11 = data10.map(item => item * 2);
console.log("data10 ::: ", data10);
console.log("data11 ::: ", data11);

console.log("***end***");

// indexOf 배열에서 지정한 데이터가 위치한 인덱스 번호를 리턴
// 없으면 -1 리턴
const data12 = [1, 2, 'Dave', 6];
console.log(data12.indexOf('Dave'));

console.log("***end***");

// findIndex 배열의 아이템이 객체일 경우, 해당 객체에서 지정한 데이터 위치를 찾을 수 있는 방법을 제공함
const myArray = [
  {
    id : 1,
    name : 'Dave Lee'
  },
  {
    id : 2,
    name : 'Alex'
  }
];
console.log(myArray.indexOf('Alex')); // -1은 없는 데이터
console.log(myArray.findIndex(item => item.name === 'Alex'));

console.log("***end***");

// find findIndex와 유사하지만, 지정한 데이터 위치를 리턴하는 것이 아니라, 
// 지정한 데이터가 들어 있는 객체를 리턴함
const myArray1 = [
  {
    id : 1,
    name : 'Dave Lee'
  },
  {
    id : 2,
    name : 'Alex'
  }
];
console.log(myArray1.indexOf('Alex'));
console.log(myArray1.findIndex(item => item.name === 'Alex'));
console.log(myArray1.find(item => item.name === 'Alex'));

console.log("***end***");

// filter 배열에서 특정 조건에 맞는 아이템만 추출할 때 사용
let myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = myArray2.filter(item => item % 2 === 0);
console.log(even);

console.log("***end***");
