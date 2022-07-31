const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const spanColorBtn = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  const color = getRandomHexColor();
  body.style.background = color;
  spanColorBtn.textContent = color;
  }