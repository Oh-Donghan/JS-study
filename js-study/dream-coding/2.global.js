console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)');
console.log(isFinite(1)); // 유한한지 체크
console.log(isFinite(Infinity)); // 무한하기 때문에 false

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

// 다시 원래 문자로 돌리는 방법
const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));