const inputRef = document.querySelector('#name-input');
const outputValueRef = document.querySelector('#name-output');

const copyValueOfInput = event =>
  !inputRef.value
    ? (outputValueRef.textContent = 'Anonymous')
    : (outputValueRef.textContent = inputRef.value);

inputRef.addEventListener('input', copyValueOfInput);
