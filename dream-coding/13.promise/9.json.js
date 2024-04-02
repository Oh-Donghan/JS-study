// JSON: JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포멧
// stringify(object): JSON -> object를 서버에 보낼때
// parse(JSON): object -> 서버에서 JSON을 받을때
const ellie = {
  name: 'ellie',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};

// 직렬화 Serializing: 객체를 문자열로 변환
const json = JSON.stringify(ellie);
console.log('object: ',ellie);
console.log('JSON: ',json);
console.log('');

// 역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj);