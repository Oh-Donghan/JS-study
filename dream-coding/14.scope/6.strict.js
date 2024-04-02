'use strict';
// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임

// var x = 1;
// delete x; // -> 불가

function add(x) {
  var a = 2;
  // b = a + x; // -> 키워드 생략 불가
  console.log(this);
}
add(1);

