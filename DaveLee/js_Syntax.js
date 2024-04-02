const data = [1, 2];

if (data.length === 0) {
  console.log("빈 배열입니다.");
} else {
  console.log("배열이 차있습니다.");
}

// 삼항연산자 비?집:놀이동산
data.length === 0 ? console.log('빈 배열') : console.log('배열이 차있다');
console.log("***삼항연산자***");

//// 함수의 기본 인자(파라미터) 값 설정 ////
// 디폴트 인자 값 설정
function printName(name = 'Dong'){
  console.log(name);
}
printName();
printName('Alex');
console.log("***end***");

//// 객체 구조 분해 할당
let data1 = {
  name : "Dave Lee",
  age : 30,
  hobby : "coding"
};
// 가져올 프로퍼티명을 다른 변수에 저장하되, 해당 프로퍼티명이 객체 안에 없을 경우,
// 다른 변수에 디폴트 값을 대입하기
let { name, age: myAge=25, special='python' } = data1;

// data1에 age 가 없다면 myAge를 넣어라 - 있기 때문에 30출력
console.log(name, myAge, special);
console.log("***end***");

//// 배열 분해 할당 ////
let data2 = [1, 2, 3];

const [item1, item2, item3, item4, item5] = data2;

console.log(item1, item2);
console.log(item1, item2, item4, item5);
console.log("***end***");

//// 변수값 교환하기 ////
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b);
console.log("***end***");

//// 함수 리턴시 여러 데이터 넘겨주기 ////
function getData(){
  return [1, 2, 3];
}
let [q, w, e] = getData();
console.log(q, w, e);

console.log("***end***");

//// split 문자열 분리해서, 각각의 변수에 대입하기 ////
let data3 = 'Dave Lee,funcoding,coding';
console.log(data3.split(''));
console.log(data3.split(','));
let [qwe, asd, fgh] = data3.split(',');
console.log(qwe, asd);

console.log("***end***");

//// Rest 파라미터 ////
function getData1(a, b, ...rest){
  console.log(a, b, rest);
}
getData1(1, 2, 3, 4, 5);

console.log("***Rest***");

//// Spread 파라미터 ////
// rest 파라미터와 마찬가지로 ...을 붙여서 정의하는 문법
// iterable한 변수(aka. 배열) 앞에 붙여서, 해당 변수의 데이터를 개별 아이템으로 분리함
const data4 = [1, 2, 3];

console.log(data4);
console.log(...data4); // == data4[0], data4[1], data4[2]
// spread 파리미터 사용이 유용한 경우
// 함수 인자에 맞춰서, 배열의 각 이이템을 대입하고 싶을 경우
function func(a, b, c, d) {
  console.log(b, c);
}
const data5 = [1, 2, 3, 4];
func(...data5);

// concat과 유사해 보이지만 spread는 배열 중간에 합칠수도 있다.
const dt1 = [1, 2, 3];
const dt2 = [0, ...dt1, 4, 5];
console.log(dt2);

console.log("***Spread***");