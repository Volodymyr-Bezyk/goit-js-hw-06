let counterValue = document.querySelector('#value');
counterValue.value = 0;
counterValue.textContent = counterValue.value;

const decrement = () => {
  counterValue.value -= 1;
  counterValue.textContent = counterValue.value;
  //   console.log(counterValue.value);
};
const increment = () => {
  counterValue.value += 1;
  counterValue.textContent = counterValue.value;
  //   console.log(counterValue.value);
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', decrement);
const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', increment);

console.log(decrementBtn);
console.log(incrementBtn);
