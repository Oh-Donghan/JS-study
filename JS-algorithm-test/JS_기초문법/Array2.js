//// 배열 조작 - 1 추가/삭제 push,pop,unshift,shift ////
let fruits = ["apple", "orange", "melon"];
let ret;

// 배열 추가 LIFO - back
ret = fruits.push("watermelon");
console.log(fruits, "length: ", fruits.length);
console.log("push -> ret",ret);
// 배열 삭제 
ret = fruits.pop();  // 삭제 될 뿐만 아니라 삭제한 데이터가 반환되어 다룰수 있다.
console.log(fruits, "length: ", fruits.length);
console.log("pop -> ret",ret);

// 배열 추가 LIFO - front
ret = fruits.unshift("watermelon");
console.log(fruits, "length: ", fruits.length);
console.log("unshift -> ret",ret);
// 배열 삭제 
ret = fruits.shift();  
console.log(fruits, "length: ", fruits.length);
console.log("shift -> ret",ret);

console.log("***push,pop,unshift,shift***")

//////////////////////////////////////////////

//// 배열 삭제/변경 splice ////
let fruits1 = ["apple", "orange", "melon"];
let ret1;

// 매개변수로 받은 인덱스 이후로 배열을 잘라서 리턴한다
ret = fruits1.splice(1);
console.log(ret); // [ 'orange', 'melon' ]
console.log(fruits1); // [ 'apple' ]
// 인덱스 n번부터 n개 요소 자르기
fruits1 = ["apple", "orange", "melon", "strawberry"];
ret = fruits1.splice(1, 1);
console.log(ret); // [ 'orange' ]
console.log(fruits1); // [ 'apple', 'melon', 'strawberry' ]

// 삭제된 위치에서 데이터 추가
ret = fruits1.splice(1, 1, "mango", "kiwi");
console.log(ret);
console.log(fruits1);

console.log("***splice***");

//////////////////////////////////////////////

//// 배열 삭제/변경 slice,concat ////
let fruits2 = ["apple", "orange", "melon"];
let fruits2_add = ["cherry", "banana"];

// slice는 splice와 유사하지만 원본 배열을 건들지 않고 새로운 배열을 생성한다.
console.log(fruits2.slice(1));
console.log(fruits2);

// 인덱스 1부터 2까지의 요소를 추출하여 새로운 배열로 반환
console.log(fruits2.slice(1, 3));
// 음수로도 접근 가능
console.log(fruits2.slice(-2));

// 배열 병합
console.log(fruits2.concat(fruits2_add));

console.log("***slice,concat***")