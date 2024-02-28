// break
let text = "";

for (let i = 0; i < 10; i++){
  if (i === 3) break; // 3번째까지만 돌고 빠져나와라
  text = text + i;
}
console.log(text);

// continue
text = "";

for (let i = 0; i < 10; i ++) {
  if (i ===3) continue; // 3번째를 건너 뛰고 돌아라
  text = text + i;
}
console.log(text);

console.log("_______________");

//// label 예제 ////
for (let i = 0; i < 3; i++){
  for (let j = 0; j < 3; j++){
    console.log(i + " * " + j + " = " + i * j);
    break; // j가 0일때만 수행이 되고 break;
  }
}

console.log("______");

// 모든 2중 for문을 종료 시키고 싶을땐 label
end: for (let i = 0; i < 3; i++){
  for (let j = 0; j < 3; j++){
    console.log(i + " * " + j + " = " + i * j);
    break end;
  }
}