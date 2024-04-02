// 기본 for문
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log('[for end]');

// 배열과 for문
const data = ['oh', 30, true];
for (let i = 0; i < data.length; i++) {
  console.log(typeof data[i]);
}
console.log('[array-for end]');

// for ... of 문
const data1 = ['oh', 'dong', 'han'];
for (let item of data1) { // for 반복시 가져올 아이템을 넣을 변수 of 배열변수
  console.log(item);
}
console.log('[for-of end]');

// 객체 배열 반환
const data2 = {
  name : 'Dong',
  age : 30,
  brand : 'fun-coding',
  get_message : function() {
    return 'Hello! You can di it!'
  }
}
console.log(Object.entries(data2));
console.log(Object.keys(data2));
console.log(Object.values(data2));
console.log('[object-return end]');

// for ... in문
for (let property in data2) {
  // 객체의 key 가져오기
  console.log(property);
  // 객체의 value 가져오기
  console.log(data2[property]);
}
console.log('[for-in end]');

// while 문
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
console.log('[while end]');
