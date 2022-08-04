const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormRefSubmit);

function onFormRefSubmit(event) {
  event.preventDefault();
  if (!event.currentTarget[0].value || !event.currentTarget[1].value) {
    return alert('You must fill all fields!!!');
  }

  const formData = new FormData(formRef);
  const formProps = {};

  // Основний варіант
  formData.forEach((value, name) => (formProps[name] = value));

  // Альтернативний варіант
  //   const elName1 = event.currentTarget.elements[0].name;
  //   const elName2 = event.currentTarget.elements[1].name;
  //   formProps[elName1] = event.currentTarget.elements[0].value;
  //   formProps[elName2] = event.currentTarget.elements[1].value;

  if (event.currentTarget[0].value && event.currentTarget[1].value)
    event.currentTarget.reset();

  console.log(formProps);
}
