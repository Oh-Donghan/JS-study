console.log(typeof String(123));
console.log(typeof String(1 / 0));
console.log(typeof String(-1 / 0));
console.log(typeof String(NaN));
console.log(typeof String(true));
console.log(typeof String(false));
console.log(typeof String(undefined));
console.log(typeof String(null));
console.log(typeof String("haha"));
///////////////////////////////////
console.log("______________________");

console.log(Number(""));
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number("123hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

console.log(parseInt("123.123"));
console.log(parseFloat("123.123"));