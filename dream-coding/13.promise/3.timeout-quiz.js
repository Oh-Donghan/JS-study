// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자! ⏱️
function runInDelay(callback, seconds) {
  if (seconds < 0) throw new Error('시간이 0보다 작아요!');
  setTimeout(() => {
    console.log(seconds + '초후!');
    callback();
  }, seconds * 1000);
}

function timeOut() {
  console.log('째깍째깍');
}

runInDelay(timeOut, 2);
