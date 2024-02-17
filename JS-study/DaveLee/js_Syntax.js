const data = [1, 2];

if (data.length === 0) {
  console.log("빈 배열입니다.");
} else {
  console.log("배열이 차있습니다.");
}

// 삼항연산자 비?집:놀이동산
data.length === 0 ? console.log('빈 배열') : console.log('배열이 차있다');

//// 함수의 기본 인자(파라미터) 값 설정 ////
// 디폴트 인자 값 설정
function printName(name = 'Dong'){
  console.log(name);
}
printName();
printName('Alex');