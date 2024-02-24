// Promise 객체 생성
const runCode = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  setTimeout(() => {
    let num = 10;
    // 비동기 작업 성공
    if (num > 11) resolve(num);
    // 비동기 작업 실패
    else reject("error");
  }, 1000);
});

// 실행 순서에 맞춰줄 필요가 있을 경우, then 을 이어서 작성해줄 수 있음
// 콜백지옥에서 해방
runCode.then((item) => {
  console.log('success', item);
}, (err) => {
  console.log(err);
}).then(() => {
  console.log('by Dong_oh');
}, () => {
  console.log('error2');
});