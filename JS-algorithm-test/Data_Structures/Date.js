//// Date ////
let date_now = new Date(); // new 키워드를 사용했기 때문에 객체로 나타남
let date_now_str = Date(); // 그냥 Date()를 호출하면 문자열로 나타남

console.log(typeof date_now, date_now); // object
console.log(typeof date_now_str, date_now_str); // string

/* milliseconds (1/1000)sec */
let date_ms_1 = new Date(0); // 디폴트는 1970년 1월 1일 UTC(협정 세계시)
console.log(date_ms_1); // 01-01
let date_ms_2 = new Date(1000 * 3600 * 24); // 하루 증가하기
console.log(date_ms_2); // 01-02

console.log("*** milliseconds (1/1000)sec ***");

/* date string */
let date_str = new Date("2020-01-01");
console.log(date_str);

console.log("*** date string ***");

/* year, month, ..., ms */
// Month : 1월(0) ~ 12월(11)
let date_params_1 = new Date(2021, 0, 1); // 12-31 일로 나오는 이유는 UTC 때문이다
let date_params_2 = new Date(Date.UTC(2021, 0, 1, 6, 12, 18, 24)); // UTC 보정으로 0이 1월이 된다
let date_params_3 = new Date(Date.UTC(2021, 0, 1)); // UTC 보정으로 0이 1월이 된다

console.log(date_params_1);
console.log(date_params_2);
console.log(date_params_3);

console.log("*** year, month, ..., ms ***");

//// 날짜 정보 얻기 ////
let date = new Date();
console.log(date); // 현재 대한민국 날짜
/* year, month, day: 0(sun) ~ 6(sat) */
console.log(date.getFullYear()); // 현재 년도
console.log(date.getMonth()); // 현재 월
console.log(date.getDay()); // 현재 요일 ex) 3 = 수요일
/* hours */
console.log("현재시간: ",date.getHours()); // 현재 시간
console.log("현재시간UTC: ",date.getUTCHours()); // UTC 시간은 현재시간 -9
/* 
  getTime: (now - date(0)) milliseconds로 반환
  getTimezoneOffset: (UTC+0 - currentZone) minutes
*/
console.log(date.getTime());
console.log(date.getTimezoneOffset()); // UTC+0과 현재 우리나라의 시간차이를 구할 수 있다

console.log("*** 날짜 정보 얻기 ***");

//// 날짜 정보 설정 ////
let date1 = new Date();
/* set year */
let ms_year = date1.setFullYear(2020, 3, 15);
console.log(date1);
console.log(new Date(ms_year));
/* set date */
date1.setDate(1);
console.log(date1);
date1.setDate(0); // 이전 달의 마지막 날
console.log(date1);
/* set hours */
date1.setHours(date1.getHours() + 2);
console.log(date1);