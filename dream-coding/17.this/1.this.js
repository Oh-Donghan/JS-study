// This는 문맥에 따라서 이것(this)이 가리키는 것이 달라짐
// This를 사용하면서 나 자신의 인스턴스를 가리키는 것 즉, 특정한 객체와
// This를 묶어두는 연결된 것을 "this 바인딩" 이라고 한다!
// 전역(Global)에서 this란 글로벌 객체를 가리킨다!
// 클래스(Class)에서 this란 앞으로 만들어질 인스턴스 자체를 가리킨다!
// 함수에서 this는 global(window || 글로벌 객체)을 가리키지만
// 엄격모드에서는 함수 내부 스코프 안에 this란 정보가 없기 때문에 this가 undefined가 된다!

// 'use strict';
/**
 * 글로벌 컨텍스트의 this
 * - 브라우저: window
 * - 노드: 모듈
 */
const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
// globalThis는 생략이 가능하다!
// globalThis.setTimeout();
// setTimeout()

console.log('');

/**
 * 함수 내부에서의 this
 * 엄격모드에서는 undefined
 * 느슨한 모드에서는 globalThis
 */
function fun() {
  console.log(this);
}
fun();

console.log('');

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('야옹');
const cat2 = new Cat('야아옹');
cat1.printName();
cat2.printName();
