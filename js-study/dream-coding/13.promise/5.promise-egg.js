function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  // return Promise.resolve(`🪴 => 🐓`);
}

// getChicken()
//   .then((chicken) => fetchEgg(chicken)) // === .then(chicken => {return fetchEgg(chicken)})
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg))
//   .catch((error) => console.log(error.name));

getChicken()
  .catch((error) => {
    console.log(error.name);
    return '🐔';
  })
  .then((chicken) => fetchEgg(chicken))
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg));

// 최종 축약 버전
// 인자와 매개변수가 같으면 생략가능!
// 화살표 함수의 코드가 한줄이면 리턴문 생략가능! 중괄호{}도 없애야함!
// getChicken()
//   .catch(() => '🐔')
//   .then(fetchEgg)
//   .then(fryEgg)
//   .then(console.log);
