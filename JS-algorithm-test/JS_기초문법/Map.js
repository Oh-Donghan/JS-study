let map = new Map();

map.set("name", "john");  // string key
map.set(123, 456);  // number key
map.set(true, "bool_type");  // boolean key -> key값에 boolean을 넣을수 있다 (객체보다 다양한 응용 가능)

console.log("map: ",map);
console.log("get: ",map.get(123));  // 456
console.log("get: ",map.get("name"));  // john
console.log("get: ",map.size);  // 3

//// chaining ////
map.delete(true);
console.log("delete: ", map);
map.clear(); // 요소 전체 삭제
console.log("clear: ", map);
map.set("name", "alice").set(123, 789).set(false, "bool_type"); // 체이닝(chaining)으로 값넣기
console.log("map.chaining: ", map);

console.log("*** map 요소 추가/삭제 ***");

///////////////////////////////////////////////
//// Map 반복문 ////
let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);
// for of 로 키값 가져오기
for (let item of recipe_juice.keys()) {
  console.log("key값: ",item);
}
// for of 로 value 가져오기
for (let amount of recipe_juice.values()) {
  console.log("value값: ",amount);
}
// for of 로 전체 가져오기
for (let entity of recipe_juice) {
  console.log("전체값: ",entity);
}

console.log("*** Map 반복문 ***");

///////////////////////////////////////////////////
//// Map과 Object 변환 ////
let recipe = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

// 객체로 변환
let recipe_obj = Object.fromEntries(recipe);
// key, value 형태의 배열로 변환
let recipe_kv = Object.entries(recipe_obj); // [key, value];
// Map으로 변환 
let recipe_map = new Map(recipe_kv);

console.log("Map: ",recipe);
console.log("fromEntries: ",recipe_obj);
console.log("entries: ",recipe_kv);
console.log("new Map: ",recipe_map);

console.log("*** Map과 Object 변환 ***")