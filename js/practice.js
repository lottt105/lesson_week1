// 1. 조건문을 이용해서 홀수와 짝수 비교하기
//오브젝트 내에 인자를 받는 함수를 만들어서
//짝수인지 홀수인지 판별
let IsOddEven = {
  getResult: (num) => {
    if (num % 2 === 0) return "짝수";
    else return "홀수";
  },
};

console.log(IsOddEven.getResult(3));
console.log(IsOddEven.getResult(4));

// 2. 배열내 최대값 찾기
//배열을 인자로 받는 함수를 만들어서
//그 배열의 최대값 반환
const getMax = (arr) => {
  let max = 0;
  for (let i of arr) {
    if (i > max) max = i;
  }
  return max;
};

console.log(getMax([1, 2, 3, 4]));
console.log(getMax([5, 3, 9, 3, 10]));
