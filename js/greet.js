const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const updateName = (e) => {
  form.classList.add("show");
  askForName();
};

const showGreetings = (name) => {
  // form 스타일 disply : None으로 -> class 요소를 제거
  form.classList.remove("show");
  greeting.innerText = `안녕하세요, ${name}`;
  // greeting 더블 클릭하면 이름 수정할 수 있게
  greeting.addEventListener("dblclick", updateName);
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
    form.classList.add("show");
    askForName();
  } else {
    showGreetings(currentUser);
  }
};

const init = () => {
  loadName();
};

init();
