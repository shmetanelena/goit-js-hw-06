const text = document.querySelector('#text');
const range = document.querySelector('#font-size-control');
const setFontSize = () => (text.style.fontSize = `${range.value}px`);
range.addEventListener('input', setFontSize);
setFontSize();
