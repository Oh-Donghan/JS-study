function solution(a, b, c) {
  let answer;
  if(a<b){
    answer = a;
  } else {
    answer = b;
  }
  if(c<answer){
    answer = c;
  } else {
    answer = answer;
  }
  return answer;
}

console.log(solution(61, 25, 11));
