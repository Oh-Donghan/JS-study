let i = 0;
while (i < 3) {
  console.log(i);
  i++; // i를 증가시켜서 3에 멈추게 하지 않으면 무한 루프에 빠진다.
}

console.log("___________");

//// do...while
i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);