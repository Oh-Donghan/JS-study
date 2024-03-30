// 클로저 Closures : 폐쇄, 닫히는 느낌
const text = 'hello';
function func() {
  console.log(text);
}
func();

// 클로저의 의해서 inner함수가 리턴이 될때 inner함수뿐만 아니라
// inner함수 외부에 있는 렉시컬환경 즉, x변수가 들어있는 렉시컬환경도 함께 
// 묶여서 클로저로 반환이 되기 때문에 inner함수에서도 여전히 outer함수에 있는 
// 변수 x에 접근이 가능하다!
function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1();