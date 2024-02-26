let fruits = ["apple", "orange", "melon"];

for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}
console.log("***for***");

for (let item of fruits) {
  console.log(item);
}
console.log("***for...of***");

for (let key in fruits){
  console.log(key)
  console.log(fruits[key]);
}
console.log("***for...in***");