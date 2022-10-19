"use strict";

/**
 * some()
 *
 * 배열 요소 중 어떠한 조건에 단 하나의 요소라도 충족할 시 true를 반환하고 모든 요소가 조건에 충족하지 않아야만 false를 반환한다.
 * 조건에 따라 배열을 순행하는 도중 조건에 충족하는 경우 순행은 그 즉시 중단된다.(break기능을 충족할 수 있다.)
 *
 * 사용처 : 배열 내부 요소의 값에 대해서 검토가 필요한 경우 사용한다.
 *
 * 🎈. 빈 배열에서 호출 할 경우 무조건 false를 반환한다.
 *
 * 1. 첫번째 parameter, currentValue = 배열의 요소
 * 2. 두번째 parameter(Optional), index = 배열의 index
 * 3. 새번째 parameter(Optional), array = 배열 자체
 *
 * ✨. forEach()나, map()에서 지원하지 않는 break; 기능을 활용하기 위해서도 사용할 수 있다.
 * https://blog.outsider.ne.kr/847#:~:text=some()%EC%9D%80%20%EC%A1%B0%EA%B1%B4%EC%9D%B4,%EC%9D%98%20%EC%9A%A9%EB%8F%84%EC%97%90%EB%8F%84%20%EB%A7%9E%EC%95%84%EB%B3%B4%EC%9D%B8%EB%8B%A4.
 * https://pro-jm.tistory.com/m/42
 *
 * 🧨. 참고
 * some()을 사용함으로 불필요한 순행을 회피할 수 있는 break; 기능을 얻을 순 있지만 some()의 원래 목적과는 다르다.
 */

const array = [1, 2, 3, 4, 5];

// array의 5개의 요소 중 하나가 조건을 충족하기 때문에 true를 반환한다.
const result1 = array.some((item) => item === 1);
console.log(result1, "result1");

// array의 5개의 요소 중 단 하나라도 조건을 충족하지 못하기 때문에 false를 반환한다.
const result2 = array.some((item) => item === 6);
console.log(result2, "result2");

// some을 이용한 break; 구현
// 1. return true; 의 경우 break;
array.some((item) => {
  // item: number의 값이 2일 경우에 break하고 1을 반환하는데 왜 for문으로 확실한 break;를 사용하지 않는지 이해되지 않는다.
  if (item === 2) return true;
  console.log(item, "return true;"); // 결과값 1
});

// 2. return false; 의 경우 continue;
array.some((item) => {
  if (item === 2) return false;
  console.log(item, "return true;"); // 결과값 1, 3, 4 ,5
});

// 배열의 요소 유무 판별
[2, 5, 8, 1, 4].some((item) => item > 10); // false
[12, 5, 8, 1, 4].some((item) => item > 10); // true

// 값이 배열의 요소에 존재하는지 확인
const fruits = ["apple", "banana", "mango", "guava"];

const checkAvailability = (array, value) => {
  return array.some((item) => item === value);
};

console.log(checkAvailability(fruits, "banana"), "바나나"); // true
console.log(checkAvailability(fruits, "nobody"), "노바디"); // false
