"use strict";

/**
 * some()
 *
 * 배열 요소 중 어떠한 조건에 단 하나의 요소라도 충족할 시 true를 반환하고 모든 요소가 조건에 충족하지 않아야만 false를 반환한다.
 * 조건에 따라 배열을 순행하는 도중 조건에 충족하는 값을 찾는다면 순행은 그 즉시 중단된다.
 *
 * 사용처 : 배열 내부 요소의 값에 대해서 검토가 필요한 경우 사용한다.
 *
 * 🎈. 빈 배열에서 호출 할 경우 무조건 false를 반환한다.
 *
 * 1. 첫번째 parameter, currentValue = 배열의 요소
 * 2. 두번째 parameter(Optional), index = 배열의 index
 * 3. 새번째 parameter(Optional), array = 배열 자체
 */

const array = [1, 2, 3, 4, 5];

// array의 5개의 요소 중 하나가 조건을 충족하기 때문에 true를 반환한다.
const result1 = array.some((item) => item === 1);
console.log(result1, "result1");

// array의 5개의 요소 중 단 하나라도 조건을 충족하지 못하기 때문에 false를 반환한다.
const result2 = array.some((item) => item === 6);
console.log(result2, "result2");
