// 스코프 Scope
// 스코프란 범위, 영역이란 뜻!
// 자바스크립트에선 식별자(변수, 함수, 클래스이름)가 유효한 범위를 뜻한다
// -> 변수, 함수, 클래스이름이 어디까지 유효한지를 나타내는 범위 영
// 선언된 위치에 따라 유효 범위가 결정됨
// 코드 블럭{ } 안의 변수는 블럭 안에서만 유효
// 존재 이유 
// 이름 충돌 방지, 메모리 절약
// 코드 블럭: { }, if() { }, for() { }, function() { }, ...

// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 ❌
{
  // 블럭 안의 변수(식별자)는 블럭 안에서만 접근 가능 
  const a = 'a';
  console.log(a);
}
const b ='b';

// 함수 외부에서는 함수 내부의 변수를 참조 ❌
function print() {
  const message = 'Hello World';
  // message는 스코프가 함수블럭 이므로 함수안에서만 접근가능
  console.log(message);
}
// 함수밖에서 호출시 에러!!!
// console.log(message);

// 함수 외부에서는 함수의 매개변수를 참조 ❌
function sum (a, b) {
  console.log(a, b);
}
// 매개변수도 마찬가지로 외부에서 접근 불가!
// console.log(a, b);
