// 날씨 api 현재 위치에 맞게 로드
const icon = document.querySelector(".weather-icon");
const temperatures = document.querySelector(".temperatures");

let lat = 0;
let lon = 0;

const getCurrentWeather = () => {
  const success = (position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=38ebeff4ecf89f6f464380c559be5686&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  };

  if (!navigator.geolocation) {
    alert("현재 위치의 날씨를 확인할 수 없습니다.");
  } else {
    // console.log("success");
    navigator.geolocation.getCurrentPosition(success);
  }
};

const setWeather = (data) => {
  // console.log(data);
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  temperatures.innerText = `${Math.floor(data.main.temp)}°`;
};

getCurrentWeather();
