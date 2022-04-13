function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxesEl = document.querySelector('div#boxes');

function createBoxes(amount) {
    destroyBoxes();
    let divs = [];
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        const size = `${30 + 10 * i}px`;
        div.style.width = size;
        div.style.height = size;
        div.style.backgroundColor = getRandomHexColor();
        divs.push(div);
    }
    divBoxesEl.append(...divs);
}

function destroyBoxes() {
    divBoxesEl.querySelectorAll('div').forEach(elem => elem.remove());
}

const controls = document.querySelector('#controls');
const inputAmount = controls.querySelector('input');

controls
    .querySelector('button[data-create]')
    .addEventListener('click', () => createBoxes(inputAmount.value));

controls.querySelector('button[data-destroy]').addEventListener('click', () => {
    destroyBoxes();
    inputAmount.value = 1;
});
