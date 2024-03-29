// 클래스를 이용한 객체 생성
class User {
  constructor() {
    this.name = 'Dong';
    this.age = 30;
  }

  get_message() {
    return 'Hello';
  }
}

const dong = new User();
console.log(typeof dong, dong.name, dong.age, dong.get_message());

//////////////////////////////////////////

// 클래스의 상속 extends와 super로 받기
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class User1 extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const dong1 = new User1('Han', 28);
console.log(dong1.name, dong1.age);

/////////////////////////////////////////

// 객체 지향의 다양성 (부모 클래스의 메서드명과 동일하지만,
// 자식클래스에서 해당 메서드를 덮어씌워 다른 동작을 할 수 있는 기능)
class Animal1 {
  constructor(name) {
    this.name = name;
  }

  get_message() {
    return 'Hi';
  }
}

class User3 extends Animal1 {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  get_message() {
    return 'Hi Hi!';
  }
}

const oh = new User3('OH', 29);
console.log(oh.name, oh.age, oh.get_message());
