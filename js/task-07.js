const spanRangeRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');

const onSpanRangeRefInput = event => {
  spanTextRef.style.fontSize = `${event.currentTarget.value}px`;
  console.log(spanTextRef.style.fontSize);
};

spanRangeRef.addEventListener('input', onSpanRangeRefInput);
