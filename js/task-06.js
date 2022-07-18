const inputRef = document.querySelector('#validation-input');

const onInputRefBlur = event => {
  if (Number(inputRef.dataset.length) === inputRef.value.length)
    inputRef.classList.add('valid');
  Number(inputRef.dataset.length) !== inputRef.value.length
    ? inputRef.classList.add('invalid')
    : inputRef.classList.replace('invalid', 'valid');
};
inputRef.addEventListener('blur', onInputRefBlur);
