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
