const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

const getTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};

setInterval(getTime, 1000);
