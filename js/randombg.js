const bg = document.querySelector(".background");

const backgroundImages = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

const getRandom = () => {
  return Math.floor(Math.random() * backgroundImages.length);
};

bg.style.backgroundImage = `url(./img/${backgroundImages[getRandom()]})`;
