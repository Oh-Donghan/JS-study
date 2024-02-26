//// 문자열 치환 ////
let text = "helLo world!!!";
let changed_text = "";

// replace는 원본 변경이 아니라 반환된 값을 변경해서 리턴한다.
changed_text = text.replace("world", "earth");
console.log(changed_text, "원본 text:", text);
// 또한 처음 만나는 요소만 변경시킨다.
console.log(text.replace("!", "?"));
// 전체 요소를 변경하고 싶으면 정규 표현식으로 나타내면 된다!
console.log(text.replace(/!/g, "?"));
// 대소문자 구분 없이 전체를 변경할때에는 
console.log(text.replace(/l/gi, "i"));

console.log("***문자열치환***");

///////////////////////////////////////////

//// 문자열 추출 ////
let text1 = "hello, world!!!";

// 인덱스 0부터 다섯번째 요소까지 추출
console.log(text1.slice(0, 5));
console.log(text1.slice(4, 5));
// ~번째 부터 추출
console.log(text1.slice(4));
// 뒤에서 부터 n번째 추출
console.log(text1.slice(-4));

// 약간의 차이가 있지만 slice가 좀더 명확하므로 slice가 주로 쓰인다
console.log(text.slice(2, 6));
console.log(text.substring(2, 6));

// 길이 기반 문자열 추출
console.log(text.substr(2, 6));
console.log(text.substr(-5, 3));

console.log("***문자열 추출***");

///////////////////////////////////////

//// 문자열 분할 ////
let fruits = "apple banana melon";

// 배열로 문자열 분할
result = fruits.split(" ");
console.log(result);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);

let text2 = "hello";
console.log(text2.split("", 3));

console.log("***문자열 분할***");