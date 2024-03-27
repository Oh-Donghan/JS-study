function solution(arr) {
  // 초기 답안 배열 선언
  let answer = [];

  // 첫 번째 문자열의 문자를 집합으로 변환하여 공통 문자의 기준으로 삼습니다.
  let commonChars = new Set(arr[0].split(''));
  
  // 두 번째 문자열부터 마지막 문자열까지 각 문자열에 대해 반복합니다.
  arr.slice(1).forEach(str => {
    // 현재 문자열의 문자를 집합으로 변환합니다.
    const currentChars = new Set(str.split(''));
    // 공통 문자를 찾기 위해 현재까지의 공통 문자 집합과 현재 문자열의 문자 집합의 교집합을 구합니다.
    commonChars = new Set([...commonChars].filter(x => currentChars.has(x)));
  });
  
  // 공통 문자를 오름차순으로 정렬하고 answer에 할당합니다.
  answer = [...commonChars].sort();
  
  return answer;
}

// 예시 실행
const arr = ['apple', 'naver'];
console.log(solution(arr)); // ['a', 'e']
