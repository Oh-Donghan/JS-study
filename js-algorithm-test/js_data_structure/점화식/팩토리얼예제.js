let result;

function recursive(number) {
  if (number == 1) {
    return number; // 이때 리턴되는 number는 1이다!
  }
  return recursive(number - 1) * number;
}

result = recursive(5); // 5! => 5 x 4 x 3 x 2 x 1
console.log(result);

// recursive(5) => recursive(4) * 5 
// recursive(4) => recursive(3) * 4
// recursive(3) => recursive(2) * 3
// recursive(2) => recursive(1) * 2
// recursive(1) => return 1