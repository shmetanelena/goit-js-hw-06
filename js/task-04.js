const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

const counterSpan = document.querySelector('#value');

let counterValue = 0;

const incrValue = () => {
    counterValue++;
    counterSpan.textContent = counterValue;
};
incrBtn.addEventListener('click', incrValue);

const decrValue = () => {
    counterValue -= 1;
    counterSpan.textContent = counterValue;
};
decrBtn.addEventListener('click', decrValue);
