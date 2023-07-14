const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const showGreetings = (name) => {
  // form 스타일 disply : None으로 -> class 요소를 제거해서
  // greeting 요소 보이게
  greeting.innerText = `안녕하세요, ${name}`;
};

const saveName = (name) => {
  localStorage.setItem("currentUser", name);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const value = input.value;
  console.log(value);
  showGreetings(value);
  saveName(value);
};

const askForName = () => {
  form.addEventListener("submit", handleSubmit);
};

const loadName = () => {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser === null) {
    // form 스타일 disply : Block으로 -> class 요소 추가해서
    askForName();
  } else {
    showGreetings(currentUser);
  }
};

const init = () => {
  loadName();
  // 날씨 api 현재 위치에 맞게 로드
};

init();
