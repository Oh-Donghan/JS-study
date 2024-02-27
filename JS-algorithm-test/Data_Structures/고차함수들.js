// use for loop
let nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++){
  // console.log(i);
  console.log(nums[i]);
}

//// use forEach() 메서드 ////
nums.forEach((i) => {
  console.log("forEach",i);
});

console.log("***forEach***");

//// map() 메서드 ////
// 배열 요소 별 함수 호출 및 결과를 배열로 반환
let nums1 = [1, 2, 3, 4, 5];
let use_for_loop = [];

// for loop - 각각의 요소에 *2를 해서 새로운 배열에 저장 (use_for_loop)
for (let i = 0; i < nums1.length; i++){
  use_for_loop.push(nums1[i] * 2);
}
console.log(use_for_loop ,"use for loop");

// use map() 메서드 - 각각의 요소에 *2를 해서 새로운 배열에 저장 (map으로 새로운 배열 생성)
let use_map = nums1.map((item) => {
  return item * 2;
});
console.log(use_map,"use map"); 

console.log("***map***");

//// find() 메서드 ////
// 콜백 함수의 조건을 만족하는 단 하나의 값만 반환
let users = [
  { name: "bob", age: 17, job: false },
  { name: "alice", age: 20, job: false },
  { name: "john", age: 27, job: true },
];

let find_job = users.find(function (item) {
  return item.job == false;
});
console.log("find_job",find_job); // { name: 'bob', age: 17, job: false }

let find_age = users.find(function (item){
  return item.age > 19;
});
console.log("find_age",find_age); // { name: 'alice', age: 20, job: false }

console.log("***find***");

//// filter() 메서드 ////
// 콜백 함수의 조건을 만족하는 값을 배열로 반환
let user = [
  { name: "bob", age: 17, job: false },
  { name: "alice", age: 20, job: false },
  { name: "john", age: 27, job: true },
];

let filter_job = user.filter(function (item){
  return item.job == false;
});
console.log("filter_job",filter_job);

let filter_age = user.filter(function (item){
  return item.age > 19;
});
console.log("filter_age",filter_age);

console.log("***filter***");

//// reduce() 메서드 ////
// 요소 별 함수 수행 누적 결과값 반환
let num = [1, 2, 3, 4, 5];
let call_count = 0;

console.log("result\tvalue\tindex");
let sum = num.reduce(function (accumulator, item, index, array){
  console.log(accumulator, "\t\t\t", item, "\t\t\t", index);
  call_count++;
  return accumulator + item;
}, 0);  // initial 값이 없다면 index 1부터 시작

console.log(call_count);  // 5
console.log(sum);  // 15


console.log("***reduce***");