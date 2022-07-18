const valueOfCounterRef = document.querySelector('#value');
let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const onDecrementBtnClick = event => {
  counterValue -= 1;
  valueOfCounterRef.textContent = counterValue;
};
const onIncrementBtnClick = event => {
  counterValue += 1;
  valueOfCounterRef.textContent = counterValue;
};

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);
