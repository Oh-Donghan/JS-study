// method 변경
function hello_func() {
  console.log("hello");
}

function hi_func() {
  console.log("hi");
}

let obj = {
  name: "john",
  age: 27,
  func: hello_func
};

hello_func();
hi_func();
obj.func();

obj.func = hi_func;
obj.func(); // 함수도 주소값이 변경이 된다 (참조에 의한 전달)

console.log("***method***")

////////////////////////////////////////////
//// this 예제 ////
let user = { name: "Dong" };
let admin = { name: "admin" };

// hello_func 내 this 값은 런타임에 결정
function hello_func1() {
  console.log("hello " + this.name);
}
user.func = hello_func1;  // this == user.name
admin.func = hello_func1;  // this == admin.name

user.func();  // hello Dong
admin.func();  // hello admin

user["func"]();  // hello Dong
admin["func"]();  // hello admin

console.log("***this***");
