// Boolean
const isTrue = true // new Boolean(true); -> 객체를 사용하면 메모리를 더 잡아먹기때문에
// 가급적 원시값으로 사용하는게 좋다.

console.log(isTrue.valueOf());

/**
 * Falshy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

/**
 * Truthy
 * 1
 * -1
 * '0'
 * 'false'
 * []
 * {}
 */

