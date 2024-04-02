// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원
class Employee {
  constructor(name, part, shift, payRate) {
    this.name = name;
    this.part = part;
    this.shift = shift;
    this.payRate = payRate;
  }

  pay() {
    return this.shift * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, part, shift) {
    super(name, part, shift, FullTimeEmployee.PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, part, shift) {
    super(name, part, shift, PartTimeEmployee.PAY_RATE);
  }
}

const ellie = new FullTimeEmployee('엘리', 's/w', 30);
const bob = new PartTimeEmployee('밥', 's/w', 20);
console.log(ellie.pay());
console.log(bob.pay());
