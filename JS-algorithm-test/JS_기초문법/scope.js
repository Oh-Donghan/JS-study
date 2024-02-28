// global scope
let x = 1;
let y = 2;
let z = 3;

console.log("global scope");
console.log(x);
console.log(y);
console.log(z);

// local scope
console.log("local scope");
{
  let x = 3;
  let y = 4;
  console.log(x);
  console.log(y);
  console.log(z);
}

function scope(){
  let x = 5;
  let y = 6;
  console.log(x);
  console.log(y);
}