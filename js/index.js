// console.log("JS 실습(조건문)");

// let date = new Date();
// let hour = date.getHours();

// if (hour < 11) console.log("아침");
// else if (hour < 15) console.log("점심");
// else console.log("저녁");

// let animal = prompt("동물을 영어로 입력해주세요", "animal");
// switch (animal) {
//   case "animal":
//     console.log("동물");
//     break;
//   case "cat":
//     console.log("고양이");
//     break;
//   case "dog":
//     console.log("강아지");
//     break;
//   default:
//     console.log(`${animal}을(를) 추가해주세요`);
//     break;
// }

// console.log("JS 실습(객체와 함수)");

// const person = {
//   greet: function () {
//     return "hello";
//   },
// };

// console.log(person.greet());

// const cal = {
//   plus: (a, b) => a ** b,
// };

// const plus = cal.plus(5, 5);
// console.log(plus);

let str = "JS 실습(반복문)";
console.log(str);

let arr = [...str];
for (let i = 0; i < arr.length; i++) {
  console.log(`${i} : ${arr[i]}`);
}

for (let i in arr) {
  console.log(`${i}(in) : ${arr[i]}`);
}
