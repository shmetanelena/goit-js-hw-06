function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector('button.change-color');
const spanColor = document.querySelector('span.color');

const buttonClick = event => {
    const color = getRandomHexColor();
    spanColor.textContent = color;
    document.body.style.backgroundColor = color;
};
button.addEventListener('click', buttonClick);
