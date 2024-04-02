//// 호이스팅 이슈 ////
// 함수와 var 모두 선언전에 호출해도 에러가 안난다.
// var 
var a = 1;
var a = 2;
a = 3;
console.log(a);
// 함수
getData();
function getData(){
  console.log("Hello World!");
}

console.log("***Hoisiting***");

