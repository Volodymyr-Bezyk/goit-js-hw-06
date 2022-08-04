const valueOfCounterRef = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

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
