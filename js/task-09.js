function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector('.change-color');
const spanColorValueRef = document.querySelector('span.color');

changeColorBtnRef.addEventListener('click', onchangeColorBtnRefClick);

function onchangeColorBtnRefClick(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanColorValueRef.textContent = color;
}
