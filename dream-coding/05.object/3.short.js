const x = 0;
const y = 0;
const coordinate = { x, y } // 오른쪽처럼 이름과 값이 같으면 왼쪽처럼 축약할 수 있다 { x: x, y: y };
console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age,
  }
}
