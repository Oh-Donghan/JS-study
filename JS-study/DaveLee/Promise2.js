//// catch 메서드 ////

// Promise 객체 생성
// const myPromise = new Promise((resolve, reject) => {
//   // 비동기 작업 수행
//   setTimeout(() => {
//     let num = 10;
//     if (num >= 11) {
//       // 비동기 작업 성공
//       resolve(num);
//     } else {
//       // 비동기 작업 실패
//       reject("this is an error");
//     }
//   }, 1000);
// });

// myPromise
//   .then((num) => {
//     console.log("success", num);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

///////////////////////////////////

// chaining 과 catch
// chaining은 then을 계속 연결해서 순차적으로 실행시키는 것 (콜백지옥 해결)
// Promise 객체 생성
const promise = new Promise((resolve, reject) => {
  console.log("start");
  resolve(1);
});

promise
  .then((num) => {
    console.log("success1");
  })
  .then(() => {
    console.log("success2");
    throw new Error("에러입니다"); // chaining이 되어있어도 예외사항이 발생하면 그 아래 코드는 실행이 안된다!
  })
  .then(() => {
    console.log("success3"); // 그래서 success3는 호출이 안되는 것!!
  })
  .catch((err) => {
    console.log(("error"));
  });


////////////////////////////////////

//// chaining 과 return 과 finally ////
// Promise 객체 생성
const myP = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  setTimeout(() => {
    let num = 10;
    if (num >= 9) {
      // 비동기 작업 성공
      resolve(num);
    } else {
      // 비동기 작업 실패
      reject("this is an error");
    }
  }, 500);
});

myP
  .then((num) => {
    console.log("success1", num);
    return 2;    // return 값이 다음 then 의 인자로 넘겨진다.
  })
  .then((num) => {
    console.log("success2", num);
  })
  .finally(() => {
    console.log("finally");  // resolve든 reject든 마지막에 함수실행 switch~case의 default 개념
  });