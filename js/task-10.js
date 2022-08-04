function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtnRef: document.querySelector('button[data-create]'),
  clearBtnRef: document.querySelector('button[data-destroy]'),
  inputValueRef: document.querySelector('#controls input'),
  parentElRef: document.querySelector('#boxes'),
};

refs.createBtnRef.addEventListener('click', oncreateBtnRefClick);

function oncreateBtnRefClick(event) {
  const amount = refs.inputValueRef.value;

  const createdMarkup = createBoxes(amount);
  refs.parentElRef.insertAdjacentHTML('afterbegin', createdMarkup);
}

function createBoxes(amount) {
  let sizeOfEl = 30;
  let elementsToAdd = '';
  for (let i = 1; i <= amount; i += 1) {
    let randomColor = getRandomHexColor();
    const newElement = `<div style=background-color:${randomColor};width:${sizeOfEl}px;height:${sizeOfEl}px></div>`;
    elementsToAdd += newElement;
    sizeOfEl += 10;
  }
  return elementsToAdd;
}

refs.clearBtnRef.addEventListener('click', onClearBtnRefClick);

function onClearBtnRefClick() {
  refs.parentElRef.innerHTML = '';
  refs.inputValueRef.value = '';
}
