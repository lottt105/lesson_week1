const title = document.querySelector(".title");
title.style.color = "blue";
title.style.display = "inline-block";
title.style.fontSize = "15px";
title.style.border = "1px solid green";
title.style.borderRadius = "50%";

const COLORS = ["red", "blue", "green", "yellow", "pink"];

const generateRandomColor = () =>
  COLORS[Math.floor(Math.random() * COLORS.length)];

title.addEventListener("click", (e) => {
  title.style.color = generateRandomColor();
  title.style.borderColor = generateRandomColor();
});

//실습 : 반복문을 이용해서 원하는 데이터를 출력하기(1)
let data = [
  { 회원번호: 0, 아이디: "red", 성별: "남자", 나이: 21 },
  { 회원번호: 1, 아이디: "yellow", 성별: "남자", 나이: 17 },
  { 회원번호: 2, 아이디: "orange", 성별: "여자", 나이: 16 },
  { 회원번호: 3, 아이디: "green", 성별: "여자", 나이: 55 },
];

for (let d of data) {
  if (d.성별 === "여자" && d.나이 >= 20) console.log(d);
}
