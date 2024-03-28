function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기
getBanana()
  .then((banana) => getApple().then((apple) => [banana, apple]))
  .then(console.log); // 총 4초 (바나나 1초 + 사과 3초)

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행! -> 총 3초
Promise.all([getBanana(), getApple()])
  .then(fruits => console.log('all: ', fruits));

console.log('');

// Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김!
Promise.race([getBanana(), getApple()])
  .then((fruit) => console.log('race: ', fruit)); // 1초 (가장 빠른 바나나만 출력)

console.log('');

Promise.all([getBanana(), getApple(), getOrange()])
  .then(fruits => console.log('all-error: ', fruits))
  .catch(console.log);

console.log('');

Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then(fruits => console.log('all-settle: ', fruits))
  .catch(console.log);