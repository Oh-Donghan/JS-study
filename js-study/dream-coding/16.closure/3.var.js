function loop() {
  const array = [];
  // var와 let의 차이점!
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
console.log(array);
array.forEach((func) => func());


// for 반복문에서 var i = 0;로 선언하면, i는 loop 함수 전체에서 유효한 하나의 변수가 됩니다. 
// 따라서 반복문이 실행되어 i의 값이 변경될 때마다 전역에 존재하는 단 하나의 i 값이 업데이트됩니다. 
// 반복문이 종료된 후 i의 값은 5가 되며, 모든 함수는 같은 i (즉, 마지막으로 업데이트된 i의 값인 5)를 
// 참조하게 됩니다.

// 반면 let i = 0;으로 선언하면, 각 반복마다 i에 대한 새로운 복사본이 생성되어 해당 블록 내에서만 유효합니다. 
// 따라서 각 반복마다 생성된 함수는 각기 다른 i의 복사본을 참조하게 됩니다. 
// 이는 i의 값이 각 반복마다 별도로 캡처되어, 함수가 실행될 때 그 당시의 i 값을 출력하게 만듭니다. 
// 그 결과, 0, 1, 2, 3, 4가 순서대로 출력됩니다.