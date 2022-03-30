const elemInput = document.querySelector('input#name-input');
const elemSpan = document.querySelector('span#name-output');

function setSpanText(text) {
    elemSpan.textContent = text ? text : 'Anonymous';
}

elemInput.addEventListener('input', event =>
    setSpanText(event.currentTarget.value)
);

setSpanText();
