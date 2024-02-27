//// 생성자 함수 예시 ////
// 붕어빵 틀 //
function FishBread(flavor, price) {
  this.flavor = flavor;
  this.price = price;
  this.base = "flour";
  // 객체 내부에서 new 로 호출됬는지 확인
  console.log(new.target);
}
// 붕어빵 //
let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1);
console.log(bread_2);
console.log(bread_3);

console.log("***생성자함수***");

//////////////////////////////////////

//// new.target - new 키워드 여부를 판단한다 ////
// new 키워드가 없을때 new를 자동으로 붙여주는 생성자 함수 만들기
function User(name) {
  console.log("new 키워드 여부: ",new.target);
  // new 키워드를 잊었어도 new 를 붙여주는 조건 처리
  if(!new.target) { // -> new가 없으면 
    return new User(name); // -> new를 붙여서 수행해라
  }
  this.name = name;
}

let result_1 = User("john");
console.log(result_1);
let result_2 = new User("john");
console.log(result_2);