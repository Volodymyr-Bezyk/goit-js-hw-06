const inputRef = document.querySelector('#validation-input');

const onInputRefBlur = event => {
  if (Number(inputRef.dataset.length) === inputRef.value.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }

  if (Number(inputRef.dataset.length) !== inputRef.value.length) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
};

inputRef.addEventListener('blur', onInputRefBlur);
