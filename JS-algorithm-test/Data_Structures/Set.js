let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set("Hello!");

console.log("Set 생성:", set);
console.log(num);
console.log(str);

// add - 요소 추가 (Set은 중복 허용 X) //
set.add(1).add(1).add(10).add(20);
console.log(set);
// has - 요소 존재 여부 묻기 //
console.log(set.has(10));  // true
console.log(set.has(2));  // false
// delete - 요소 삭제 하기 //
set.delete(1);  // true
set.delete(-1);  // false
console.log(set);

console.log("*** Set ***");

/////////////////////////////////////
//// Set 반복문 ////
let txt = new Set("Hello!");

console.log(txt);

// 보통 아무것도 붙이지 않은 기본 상태를 많이 씀 (value만 있기 때문)
for (let item of txt) {
  console.log(item);
}
// Set은 key(), value(), entries() 모두 제공하지만 key가 없기 때문에 같은 값(value)을 리턴한다.
for (let item of txt.keys()) {
  console.log(item);
}
for (let item of txt.values()) {
  console.log(item);
}
// entries()는 key, value 형태의 포멧을 지켜서 반환한다 (결국엔 value, value 로 나오긴함) → Map과의 호환성을 위해 존재
for (let item of txt.entries()) {
  console.log(item);
}

console.log(txt.keys()); // [value]
console.log(txt.entries()); // [value, value] -> Map과의 호환성을 위해 존재

console.log("*** Set 반복문 ***");