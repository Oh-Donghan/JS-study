function solution(s) {
  let result = 0; // 최종 결과를 저장할 변수
  let currentNumber = 0; // 현재 파싱 중인 숫자
  let operator = 1; // 현재 숫자의 부호 (1: 양수, -1: 음수)

  for (let i = 0; i <= s.length; i++) {
    const char = s[i];
    // 숫자인 경우
    if (!isNaN(parseInt(char))) {
      currentNumber = currentNumber * 10 + parseInt(char);
    }
    // 연산자이거나 문자열의 끝에 도달한 경우
    if (isNaN(parseInt(char)) || i === s.length) {
      result += operator * currentNumber;
      currentNumber = 0; // 현재 숫자 리셋
      operator = (char === '-') ? -1 : 1; // 부호 업데이트
    }
  }

  return result;
}

const s = "-3+26-7";
console.log(solution(s)); // 16이 출력되어야 합니다.
