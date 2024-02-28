//// 배열 탐색 ////
let fruits = ["apple", "orange", "banana", "orange", "melon"];

// 첫번째 해당 요소의 index 출력
console.log(fruits.indexOf("orange"));  // 1
// 배열 내에 요소가 없으면 -1 을 리턴
console.log(fruits.indexOf("Orange"));  // -1
// 두번째 요소 출력 -> 첫번째 요소 건너뛰고 두번째 요소의 index 출력
console.log(fruits.indexOf("orange", 2));  // 3

// 뒤에서 부터 찾기
console.log(fruits.lastIndexOf("orange"));  // 3
console.log(fruits.lastIndexOf("orange", -3));  // 1
console.log(fruits.lastIndexOf("orange", 0));  // -1

// 해당 요소가 있는지 판단해서 논리적으로 true, false 리턴
console.log(fruits.includes("orange"));  // true
console.log(fruits.includes("kiwi"));  // false

console.log("***배열 탐색***");

//// 배열 정렬/반전/변환 ////
let nums = [1, -1, 4, 5, 2, 0];
let nums1 = [1, -1, 4, 5, 2, 0];
// 원본 배열을 수정하여 오름차순으로 정렬
console.log(nums.sort());  // -1, 0, 1, 2, 4, 5
// reverse()는 좌우 반전을 시킨다 (순서를 뒤집는다)
console.log(nums1.reverse());  // 0, 2, 5, 4, -1, 1
// sort와 reverse를 함께 사용해서 내림차순으로 정렬할 수 있다
console.log(nums.sort().reverse());  // 5, 4, 2, 1, 0, -1

let fruits1 = ["apple", "orange", "banana", "melon"];
// 문자열에서 sort를 사용하면 앞글자 기준으로 유니코드 순서로 정렬
console.log(fruits1.sort());  // 'apple', 'banana', 'melon', 'orange

let fruits2 = ["apple", "orange", "banana", "melon"];
// 원본 배열을 변경하지 않고 새로운 문자열 반환
let str = fruits.join();
console.log(str);  // apple,orange,banana,orange,melon (문자열형태로 반환)
// 구분자를 변환하여 문자열로 전환 
let str_separator = fruits2.join(";");
console.log(str_separator);  // apple;orange;banana;melon
// 그 문자열을 다시 split으로 배열로 전
let result = str_separator.split(";");
console.log(result);  // [ 'apple', 'orange', 'banana', 'melon' ]