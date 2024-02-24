// setTimeout
// console.log('안녕하세요');
// setTimeout(() => {
//   console.log('Dave Lee 입니다.');
// },3000);
// console.log('잔재미코딩입니다');

// console.log('***타임아웃***');

// 콜백 함수
console.log('[1]');
function desc(callback) {
  setTimeout(() => {
    console.log('[2]');
    callback();
  }, 3000);
}

function desc2() {
  console.log('[3]');
}

desc(desc2);
console.log("***콜백함수***")