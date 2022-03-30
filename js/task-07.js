const text = document.querySelector('#text');
const range = document.querySelector('#font-size-control');
range.addEventListener(
    'input',
    event => (text.style.fontSize = `${event.currentTarget.value}px`)
);
