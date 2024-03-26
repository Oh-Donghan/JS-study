const textobj = new String('Hello World!');
const text = 'Hello World!';
console.log(textobj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text.charAt(0));
console.log(text.charAt(1));

console.log(text.indexOf('l')); // 2
console.log(text.lastIndexOf('l')); // 9

console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

console.log(text.startsWith('He'));
console.log(text.endsWith('!'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0 , 2)); // 0부터 시작해서 2번째 인덱스 전까지
console.log(text.slice(2)); // 인덱스 2부터 잘라내서 가져오기
console.log(text.slice(-2)); // 뒤에서 두번째 인덱스 전까지 잘라내서 가져오기

const space = '     space          ';
console.log(space);
console.log(space.trim()); // 공백 제거

const longText = 'Get to the point';
console.log(longText.split(' '));
console.log(longText.split(' ', 2));