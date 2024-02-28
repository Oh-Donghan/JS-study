//// 문자표기 ////
// line feed
console.log("line\nfeed");
// Carriage return
console.log("carriage\rreturn");
// BackSlash
console.log("backslash \\");
// Tab
console.log("tab\ttab");

console.log("***문자표기***");

//// 문자열 길이 ////
let str = "hello\nworld\n!!!";
console.log(str.length);

//// 문자열 접근 ////
console.log(str.charAt(1));  // e
console.log(str.charCodeAt(1));  // 101 -> 아스키 코드값
console.log(str[1]);  // e

console.log("***문자열 길이와 접근***");

//// 문자열 검색 ////
let text = "hello world!!!";
// 첫번째 l 검색 (첫번째로 만난 문자열의 index 위치)
console.log(text.indexOf("l"));  // 2
// 3번째 부터 탐색
console.log(text.indexOf("l", 3));  // 3
console.log(text.lastIndexOf("l"));  // 10

// 검색은 대소문자를 구분한다
console.log(text.includes("HeLlo"));  // false
// 전체가 아니라 부분문자열로 시작하는지 찾는다
// 그래서 ello로 시작하는 index 1번째 부터 찾아야 true가 나온다
console.log(text.startsWith("ello", 1));  // true
console.log(text.endsWith("world"));  // false

console.log("***문자열 검색***");

//// 문자열 대소문자 변환 ////
let str1 = "HeLlO!!";
console.log(str1.toUpperCase());
console.log(str1.toLocaleLowerCase());

console.log("***대소문자***");