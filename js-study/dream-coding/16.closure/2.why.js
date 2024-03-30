// 클로저는 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해 쓰인다
// 캡슐화와 정보은닉
// 클래스의 private필드 또는 메서드를 사용하는 효과와 동일!

// 클로저 사용 예시
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

// 클래스를 사용하면 클로저를 사용할 필요가 없다!
// 클래스 사용 예시
class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}

const counter = new Counter();
counter.increase();